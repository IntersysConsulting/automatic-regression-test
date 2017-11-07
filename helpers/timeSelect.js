import { Selector, ClientFunction } from 'testcafe'; // first import testcafe selectors
import { filterSelectorByAttribute } from '../helpers/selectors';


exports.timeSelect = function (newValue, expectedValue, esoField, currentTab, otherTab) {
  // For time IE.: vm.businessOperation.hoursOfOperationStart
  const selectedField = filterSelectorByAttribute('eso-time', 'with-address-from', esoField);
  // For this IE: Hours Of Operation Start
  const esoNumpad = Selector('eso-masked-input').child((node, idx, originNode) => {
    if (node.hasAttribute('type')) return true;
    else return false;
  });
  const testName = esoField.split('.').splice(1, 2).join('.');
  const esoNumpadButton = Selector('button.workflow-btn').withText('OK');

  test(testName, async t => {
    await t
      .click(selectedField)
      .typeText(esoNumpad, newValue)
      .click(esoNumpadButton)
      .click(otherTab)
      .click(currentTab)
      .expect(selectedField.innerText).contains(expectedValue);
  });
}