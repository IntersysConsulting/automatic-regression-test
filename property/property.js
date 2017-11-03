import fs from 'fs';
import { Selector } from 'testcafe'; // first import testcafe selectors
import { filterSelectorByAttribute } from '../helpers/selectors';

fixture`property.property`// declare the fixture
.page`${config.host}/property/c08f47df-1fc0-e711-9be3-e4a471db8629/property`;  // specify the start page

const infoTypeSelectButton = filterSelectorByAttribute('eso-single-select', 'with-address-from', 'vm.info.typeId');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const otherTab = filterSelectorByAttribute('li','ui-sref','property.contacts');
const propertyTab = filterSelectorByAttribute('li','ui-sref','property.property');

//info.type
// const infoTypeExpectedValue = 'Business';
// const infoTypeSelectButton  = filterSelectorByAttribute('eso-single-select','with-address-from','vm.info.typeId');
// const infoTypeSelectOption  = Selector('.label-container').withText(infoTypeExpectedValue);

// test('info.type', async t => {
//     await t
//         .click(infoTypeSelectButton)
//         .click(infoTypeSelectOption)

//         // Use the assertion to check if the actual header text is equal to the expected one
//         .expect(Selector('.display-value').innerText).eql(infoTypeExpectedValue)
//         .click(otherTab)
//         .click(propertyTab)
//         .expect(Selector('.display-value').innerText).eql(infoTypeExpectedValue);
// });


// //info.status
// const infoStatusExpectedValue = 'Undetermined';
// const infoStatusSelectButton = filterSelectorByAttribute('eso-single-select','with-address-from','vm.info.statusId');
// const infoStatusSelectOption = Selector('.label-container').withText(infoStatusExpectedValue);

// test('info.status', async t => {
//     await t
//         .click(infoStatusSelectButton)
//         .click(infoStatusSelectOption)

//         // Use the assertion to check if the actual header text is equal to the expected one
//         .expect(Selector('.display-value').innerText).eql(infoStatusExpectedValue);
// });


//info.startDate
// const infoStartDateExpectedValue = '6';
// const infoStartDateSelectButton = filterSelectorByAttribute('eso-date','with-address-from','vm.info.startDate');
// const infoStartDateSelectOption = Selector('.date-item').withText(infoStartDateExpectedValue);
// const infoStartDateOk = Selector('.btn').withText("OK");

// test('info.status', async t => {
//     await t
//         .click(infoStartDateSelectButton)
//         .click(infoStartDateSelectOption)
//         .click(infoStartDateOk)
//         .expect(Selector('eso-date').innerText).contains(infoStartDateExpectedValue)     
//         .click(otherTab)
//         .click(propertyTab)        
//         .expect(Selector('eso-date').innerText).contains(infoStartDateExpectedValue);
// });







