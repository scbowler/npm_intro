
import addToDom from './add_to_dom';
import * as calc from './calc';
import $ from 'jquery';
// import doMath, { add as plus, subtract, multiply, divide } from './calc';

addToDom('I was dynamically created!');

console.log('Calc:', calc);

addToDom(`12 + 98 = ${calc.add(12, 98)}`);

addToDom(`123 - 57 = ${calc.subtract(123, 57)}`);

addToDom(`9234 + 4521 = ${calc.default(9234, '+', 4521)}`);

addToDom(`123 / 57 = ${calc.divide(123, 57)}`);

addToDom(`123 x 57 = ${calc.multiply(123, 57)}`);

$('#root').append('<h1>I was added with jQuery $$</h1>');
