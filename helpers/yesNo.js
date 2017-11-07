import { Selector } from 'testcafe'; // first import testcafe selectors
import { filterSelectorByAttribute } from '../helpers/selectors';


//For no is only working with no as default or null
exports.yesNo = function(esoField, currentTab, otherTab){
    const selectedField  = filterSelectorByAttribute('eso-yes-no','with-address-from',esoField);
    const yes = selectedField.child(0);
    const no  = selectedField.child(1);
    let first = yes;
    let second = no;
    const testName = esoField.split('.').splice(1, 2).join('.');
    test(testName, async t => {
        await t
            .click(first)
            .expect(first.hasClass('selected')).ok("yes click")
            .click(otherTab)
            .click(currentTab)
            .expect(first.hasClass('selected')).ok("Yes click autosave")
            .click(second)
            .expect(second.hasClass('selected')).ok("no click")
            .click(otherTab)
            .click(currentTab)
            .expect(second.hasClass('selected')).ok("no click autosave");
    });
}

