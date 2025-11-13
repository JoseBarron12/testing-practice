import { calculator } from "./calculator";

test('non-number input cause TypeError ', () => {
  expect(() => calculator.add(2,"string")).toThrow(TypeError);
});

test('non-number input cause TypeError ', () => {
  expect(() => calculator.subtract("string", 2)).toThrow(TypeError);
});

test('non-number input cause TypeError ', () => {
  expect(() => calculator.divide("string","string")).toThrow(TypeError);
});

test('non-number input cause TypeError ', () => {
  expect(() => calculator.multiply(2,"string")).toThrow(TypeError);
});

test('add positive numbers ', () => {
  expect(calculator.add(22,2232)).toBe(2254);
});

test('add negative numbers ', () => {
  expect( calculator.add(-22,-342)).toBe(-364);
});

test('add negative and positive numbers ', () => {
  expect(calculator.add(-41,1)).toBe(-40);
});

test('subtract positive numbers ', () => {
  expect(calculator.subtract(22,2232)).toBe(-2210);
});

test('subtract negative numbers ', () => {
  expect( calculator.subtract(-22,-342)).toBe(320);
});

test('subtract negative and positive numbers ', () => {
  expect(calculator.subtract(-41,1)).toBe(-42);
});

test('multiply positive numbers ', () => {
  expect(calculator.multiply(2,3)).toBe(6);
});

test('multiply negative numbers ', () => {
  expect(calculator.multiply(-4,-5)).toBe(20);
});

test('multiply negative and positive numbers ', () => {
  expect(calculator.multiply(10,-5)).toBe(-50);
});

test('multiply zero and positive number', () => {
  expect(calculator.multiply(0,5)).toBe(0);
});

test('multiply zero and negative number', () => {
  expect(calculator.multiply(0,-5)).toBe(-0);
});

test('multiply zero and zero', () => {
  expect(calculator.multiply(0,0)).toBe(0);
});

test('divide positive numbers ', () => {
  expect(calculator.divide(2,3)).toBe(0.6666666666666666);
});

test('divide negative numbers ', () => {
  expect(calculator.divide(-30,-6)).toBe(5);
});

test('divide negative and positive numbers ', () => {
  expect(calculator.divide(-45,5)).toBe(-9);
});

test('divide number by zero  ', () => {
  expect(calculator.divide(5,0)).toBe(Infinity);
});

test('divide zero by a number', () => {
  expect(calculator.divide(0,5)).toBe(0);
});













