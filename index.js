// run `node index.js` in the terminal
import DecimalFormat from './DecimalFormat.js';

const pattern = '0.00##';
var formatter = new DecimalFormat(pattern);

console.log(formatter.format(0.12458));
console.log(formatter.format(0.12458));
console.log(formatter.format(0.12458));
console.log(formatter.format(0.12458));
console.log(formatter.format(0.12458));
