import { Selector } from 'testcafe'; // first import testcafe selectors
import { filterSelectorByAttribute } from '../helpers/selectors';

exports.numberInput = function(expectedValue, esoField, maxNumber, currentTab, otherTab){
    const selectedField = filterSelectorByAttribute('eso-number-input','with-address-from',esoField);
    const child = selectedField.child(2);
    const testName = esoField.split('.').splice(1,2).join('.');
    const maxValue = Array(maxNumber + 2).join('9'); 

    test(testName, async t => {
        await t
            .selectText(child)
            .typeText(selectedField,maxValue)
            .expect(child.value).notEql(maxValue, 'Not allows more numbers than expected')
            .selectText(child)
            .typeText(selectedField,"abcdefhgi")
            .expect(child.value).notEql('abcdefhgi', 'Not allows letters')
            .selectText(child)
            .typeText(selectedField,expectedValue)
            .expect(child.value).contains(expectedValue,'Numbers are equal than expected')
            .click(otherTab)
            .click(currentTab)
            .expect(child.value).contains(expectedValue, 'The autosave is working');
    });
}