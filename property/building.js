import fs from 'fs';
import { Selector } from 'testcafe'; // first import testcafe selectors
import { filterSelectorByAttribute } from '../helpers/selectors';

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

fixture`property.property`// declare the fixture
  .page`${config.host}/building/c08f47df-1fc0-e711-9be3-e4a471db8629/building`;  // specify the start page

const infoTypeSelectButton = filterSelectorByAttribute('eso-field', 'field-with-click-indicator');

//then create a test and place your code there
test('info.type', async t => {
  await t
    .click(infoTypeSelectButton)
    .click('.shelf-click-indicator')

    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector('.display-value').innerText).eql('Assembly');
});






