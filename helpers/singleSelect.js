import { Selector } from 'testcafe'; // first import testcafe selectors
import { filterSelectorByAttribute } from '../helpers/selectors';


exports.singleSelect = function (expectedValue, esoField, currentTab, otherTab){
    const selectedField  = filterSelectorByAttribute('eso-single-select','with-address-from',esoField);
    const selectOption  = Selector('.label-container').withText(expectedValue);
    const testName = esoField.split('.').splice(1,2).join('.');

    test(testName, async t => {
        await t
            .click(selectedField)
            .click(selectOption)
            .expect(selectedField.innerText).contains(expectedValue)
            .click(otherTab)
            .click(currentTab)
            .expect(selectedField.innerText).contains(expectedValue);
    });
}