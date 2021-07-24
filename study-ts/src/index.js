// const test = require('./hello');
import * as test from './hello';

console.log(test.hello);
console.log(test.getName());

console.log('This is Test!!');

const testFunction = () => {
  console.log(`${test.hello} + I'm ${test.getName()}`);
}

testFunction();

const hello = require('./require');

console.log(hello);

import axios from 'axios';

axios.get('/test')
  .then((responses) => {
    console.log(responses);
  })
  .catch(error => console.error(error));