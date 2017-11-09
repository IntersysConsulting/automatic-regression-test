import { Selector } from 'testcafe'; // first import testcafe selectors
import { filterSelectorByAttribute } from '../helpers/selectors';

exports.text = function(expectedValue, esoField, maxLenght, currentTab, otherTab){
    const selectedField = filterSelectorByAttribute('eso-text','with-address-from',esoField);
    const child = selectedField.child((node, idx, originNode) => {
        if (node.hasAttribute('type')) return true;
        else return false;
    });
    const testName = esoField.split('.').splice(1,2).join('.');
    const maxLenghtText = Array(maxLenght + 2).join('A'); 

    test(testName, async t => {
        await t
            .selectText(child)
            .pressKey('backspace')
            .typeText(selectedField,maxLenghtText)
            .expect(child.value).notEql(maxLenghtText)
            .selectText(child)
            .pressKey('backspace')
            .typeText(selectedField,expectedValue)
            .expect(child.value).contains(expectedValue)
            .click(otherTab)
            .click(currentTab)
            .expect(child.value).contains(expectedValue);
    });
}