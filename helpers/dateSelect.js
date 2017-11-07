import { Selector } from 'testcafe'; // first import testcafe selectors
import { filterSelectorByAttribute } from '../helpers/selectors';


exports.dateSelect = function (newValue, expectedValue, esoField, currentTab, otherTab) {
  // For date IE.: OCCUPANT_CERTIFICATEOFOCCUPANCYDATEOFISSUE
  const selectedField = filterSelectorByAttribute('eso-date', 'field-ref', esoField);
  const esoCalendar = Selector('eso-masked-input').child((node, idx, originNode) => {
    if (node.hasAttribute('type')) return true;
    else return false;
  });
  const testName = esoField.split('.').splice(1, 2).join('.');
  const esoCalendarButton = Selector('button.workflow-btn').withText('OK');

  test(testName, async t => {
    await t
      .click(selectedField)
      .typeText(esoCalendar, newValue)
      .click(esoCalendarButton)
      .click(otherTab)
      .click(currentTab)
      .expect(selectedField.innerText).contains(expectedValue);
  });
}