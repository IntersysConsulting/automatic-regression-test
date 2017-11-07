import fs from 'fs';
import { Selector } from 'testcafe'; // first import testcafe selectors
import { filterSelectorByAttribute } from '../helpers/selectors';
import { singleSelect } from '../helpers/singleSelect';
import { numberInput } from '../helpers/numberInput';
import { timeSelect } from '../helpers/timeSelect';
import { dateSelect } from '../helpers/dateSelect';

const json = JSON.parse(fs.readFileSync('config.json', 'utf8'));

fixture`occupant.occupant`// declare the fixture
  .page`${json.host}/occupant/7fa43d18-20c0-e711-9be3-e4a471db8629/occupant`; 

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

singleSelect('Vacant', 'vm.info.statusId', occupantTab, otherTab);
singleSelect('Assembly', 'vm.info.typeId', occupantTab, otherTab);
singleSelect('Aircraft runway', 'vm.info.occupantUseId', occupantTab, otherTab);
singleSelect('Medical Use', 'vm.info.mixedUseId', occupantTab, otherTab);
singleSelect('Private', 'vm.info.securityTypeId', occupantTab, otherTab);


numberInput('123456789', 'vm.info.contentValue', 9,occupantTab, otherTab);


//CODE CERT & PERM

singleSelect('Mercantile: Group M', 'vm.permits.nfpaUseCodeId', occupantTab, otherTab);
singleSelect('Educational', 'vm.permits.nfpaOccCodeId', occupantTab, otherTab);
dateSelect('10112017', '10/11/2017', 'OCCUPANT_CERTIFICATEOFOCCUPANCYDATEOFISSUE', buildingTab, otherTab);
//singleSelect('Private', 'vm.permits.stateOccupancyCodeId', occupantTab, otherTab);
//singleSelect('Private', 'vm.permits.localOccupancyClassId', occupantTab, otherTab);


//OCCUPANCY 
singleSelect('Institutional (Group I)', 'vm.occupancy.occupancyClassificationId', occupantTab, otherTab);
singleSelect('Agricultural Services', 'vm.occupancy.standardIndustrialClassificationId', occupantTab, otherTab);

//BUSINESS

timeSelect('100000', '10:00:00', 'vm.businessOperation.hoursOfOperationStart', buildingTab, otherTab);

//MONITORING

//NOTES