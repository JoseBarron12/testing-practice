import { analyseArray } from "./analyzearray";

test('non-array input cause TypeError ', () => {
  expect(() => analyseArray(2)).toThrow(TypeError);
});

test('non-array input cause TypeError ', () => {
  expect(() => analyseArray([2, "yuhh"])).toThrow(TypeError);
});

test('object attribute with empty array', () => {
  expect(analyseArray([])).toEqual({average: 0, min: 0, max: 0, length: 0});
});

test('object attributes', () => {
  expect(analyseArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6});
});



