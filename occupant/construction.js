import { Selector } from 'testcafe'; // first import testcafe selectors
import { filterSelectorByAttribute } from '../helpers/selectors';
import { singleSelect } from '../helpers/singleSelect';

fixture `occupant.construction`// declare the fixture
    .page `http://localhost:3000/fire/properties/#/occupant/7fa43d18-20c0-e711-9be3-e4a471db8629/construction`;  // specify the start page

const otherTab = filterSelectorByAttribute('li','ui-sref','occupant.contacts');
const constructionTab = filterSelectorByAttribute('li','ui-sref','occupant.construction');

test('info.occupantName', async t => {
    await t
        .click(constructionTab);  
});


//DIMENSIONS

//EXITS

//CONSTRUCTION
singleSelect('Steel', 'vm.construction.interiorWallsId', constructionTab, otherTab);
singleSelect('Wood', 'vm.construction.interiorDoorsId', constructionTab, otherTab);
singleSelect('Through Roof', 'vm.construction.fireWallsId', constructionTab, otherTab);
singleSelect('Glass', 'vm.construction.fireDoorsId', constructionTab, otherTab);
singleSelect('Medium', 'vm.construction.fireLoadId', constructionTab, otherTab);

//ACCESS

//KNOX BOXES