import { Selector } from 'testcafe'; // first import testcafe selectors
import { filterSelectorByAttribute } from '../helpers/selectors';

fixture `property.property`// declare the fixture
    .page `http://localhost:3000/fire/properties/#/property/c08f47df-1fc0-e711-9be3-e4a471db8629/property`;  // specify the start page

const infoTypeSelectButton = filterSelectorByAttribute('eso-single-select','with-address-from','vm.info.typeId');

//then create a test and place your code there
test('info.type', async t => {
    await t
        .click(infoTypeSelectButton)
        .click('.label-content')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('.display-value').innerText).eql('Assembly');
});






