import { Selector } from 'testcafe'; // first import testcafe selectors
import { filterSelectorByAttribute } from '../helpers/selectors';

fixture `occupant.occupant`// declare the fixture
    .page `http://localhost:3000/fire/properties/#/occupant/7fa43d18-20c0-e711-9be3-e4a471db8629/occupant`;  // specify the start page

const otherTab = filterSelectorByAttribute('li','ui-sref','occupant.contacts');
const occupantTab = filterSelectorByAttribute('li','ui-sref','occupant.occupant');

//info.occupantName
const occupantNameExpectedValue = 'Occupant';
const occupantNameSelectButton  = Selector('.shelf-click-indicator').withText('Change Occupant Name/Number');
const occupantNameType  = filterSelectorByAttribute('input','type','text');
const occupantNameOk = Selector('.btn').withText("Change Name");

test('info.occupantName', async t => {
    await t
        .click(occupantNameSelectButton)
        .selectText(occupantNameType)
        .typeText(occupantNameType,occupantNameExpectedValue)
        .click(occupantNameOk)
        .expect(Selector('.display-value').innerText).contains(occupantNameExpectedValue)
        .click(otherTab)
        .click(occupantTab)      
        .expect(Selector('.display-value').innerText).contains(occupantNameExpectedValue);  
});


//info.statusId vm.info.statusId
const statusIdExpectedValue = 'Vacant';
const statusIdSelectButton  = filterSelectorByAttribute('eso-single-select','with-address-from','vm.info.statusId');
const statusIdSelectOption  = Selector('.label-container').withText(statusIdExpectedValue);

test('info.type', async t => {
    await t
        .click(statusIdSelectButton)
        .click(statusIdSelectOption)
        .expect(Selector('.display-value').innerText).contains(statusIdExpectedValue)
        .click(otherTab)
        .click(occupantTab)
        .expect(Selector('.display-value').innerText).contains(statusIdExpectedValue);
});