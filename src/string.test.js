import { capitalize } from "./string.js";

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


