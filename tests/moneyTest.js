import { formatCurrency } from '../scripts/utils/money.js';

console.log('with normal value');

if ((formatCurrency(1095)) === '10.95') {
    console.log('Passed');
} else {
    console.log('Failed');
}

console.log('with 0');

if ((formatCurrency(0)) === '0.00') {
    console.log('Passed');
} else {
    console.log('Failed');
}

console.log('with decimal');

if ((formatCurrency(2005.5)) === '20.06') {
    console.log('Passed');
} else {
    console.log('Failed');
}


console.log('with 2 decimal');

if ((formatCurrency(2005.6)) === '20.06') {
    console.log('Passed');
} else {
    console.log('Failed');
}


console.log('with 3 decimal');

if ((formatCurrency(2005.43)) === '20.05') {
    console.log('Passed');
} else {
    console.log('Failed');
}
