import { capitalize, reverseString} from "./string.js";

/*
* Test Suites for capitalize()

test('non-string input cause TypeError', () => {
  expect(() => capitalize(2)).toThrow(TypeError);
});

test('first character of lowercase string to be capitalized', () => {
  expect(capitalize("string")).toBe("String");
});

test('first character of capitalized string to be capitalized', () => {
  expect(capitalize("String")).toBe("String");
});

test('first character of uppercase string to be capitalized', () => {
  expect(capitalize("STRING")).toBe("String");
});

test('non-letter first character string will remain the same', () => {
  expect(capitalize("36string")).toBe("36string");
});

test('non-letter first character string will remain the same with fully lowercase string', () => {
  expect(capitalize("36STRING")).toBe("36string");
});
*/

/* 
 * Test Suites for reverseString()
*/
test('non-string input cause TypeError', () => {
  expect(() => reverseString(200)).toThrow(TypeError);
});

test('empty string will return itself', () => {
  expect(reverseString("")).toBe("");
});

test('odd length string reversed', () => {
  expect(reverseString("strings")).toBe("sgnirts");
});

test('even length string reversed', () => {
  expect(reverseString("string")).toBe("gnirts");
});

test('original string remains unchanged only reversed positions', () => {
  expect(reverseString("StRing76")).toBe("67gniRtS");
});

test('string of length one remains unchanged', () => {
  expect(reverseString("S")).toBe("S");
});





