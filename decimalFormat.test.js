// import DecimalFormat from './DecimalFormat.js';
const DecimalFormat = require('./DecimalFormat');

test('format 0 with "0.00##"', () => {
  const pattern = '0.00##';
  const formatter = new DecimalFormat(pattern);
  expect(formatter.format(0)).toEqual('0.0');
});
test('format 1.25487 with "0.00##"', () => {
  const pattern = '0.00##';
  const formatter = new DecimalFormat(pattern);
  expect(formatter.format(1.25487)).toEqual('1.2549');
});
test('format 1.25487 with "0.00## $"', () => {
  const pattern = '0.00## $';
  const formatter = new DecimalFormat(pattern);
  expect(formatter.format(1.25487)).toEqual('1.2549 $');
});
