import fs from 'fs';
import { Selector } from 'testcafe'; // first import testcafe selectors
import { filterSelectorByAttribute } from '../helpers/selectors';
import { singleSelect } from '../helpers/singleSelect';
import { timeSelect } from '../helpers/timeSelect';
const json = JSON.parse(fs.readFileSync('config.json', 'utf8'));

fixture `occupant.occupant`// declare the fixture
    .page`${json.host}/occupant/7fa43d18-20c0-e711-9be3-e4a471db8629/occupant`;  // specify the start page

const otherTab = filterSelectorByAttribute('li','ui-sref','occupant.contacts');
const occupantTab = filterSelectorByAttribute('li','ui-sref','occupant.occupant');


//INFO

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


//vm.info.statusId
singleSelect('Vacant', 'vm.info.statusId', occupantTab, otherTab);

//vm.info.typeId
singleSelect('Assembly', 'vm.info.typeId', occupantTab, otherTab);

//vm.info.occupantUseId
singleSelect('Aircraft runway', 'vm.info.occupantUseId', occupantTab, otherTab);

//vm.info.mixedUseId
singleSelect('Medical Use', 'vm.info.mixedUseId', occupantTab, otherTab);

//vm.info.securityTypeId
singleSelect('Private', 'vm.info.securityTypeId', occupantTab, otherTab);


//info.contentValue vm.info.contentValue
const contentValueExpectedValue = '123456789';
const contentValueSelectedField = filterSelectorByAttribute('eso-number-input','with-address-from','vm.info.contentValue');

test('info.typeId', async t => {
    await t
        .typeText(contentValueSelectedField,contentValueExpectedValue)
        .typeText(contentValueSelectedField,"12345678910111213")
        .typeText(contentValueSelectedField,"abcdefhgi")
        .expect(contentValueSelectedField.innerText).contains(contentValueExpectedValue)
        .click(otherTab)
        .click(occupantTab)
        .expect(contentValueSelectedField.innerText).contains(contentValueExpectedValue);
});

//CODE CERT & PERM

//OCCUPANCY

//BUSINESS

timeSelect('100000', '10:00:00', 'vm.businessOperation.hoursOfOperationStart', buildingTab, otherTab);

//MONITORING

//NOTES