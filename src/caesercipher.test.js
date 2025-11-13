import { caeserCipher } from "./caesercipher";

test('shift lowercase string', () => {
  expect(caeserCipher("abc", 3)).toBe("def");
});

test('shift lowercase string with wrapping', () => {
  expect(caeserCipher("xyz", 3)).toBe("abc");
});

test('shift lowercase string with borderline wrapping', () => {
  expect(caeserCipher("uvw", 3)).toBe("xyz");
});

test('shift lowercase and uppercase string', () => {
  expect(caeserCipher("HeLLo", 3)).toBe("KhOOr");
});

test('shift lowercase and uppercase string with wrapping', () => {
  expect(caeserCipher("XYZ", 3)).toBe("ABC");
});

test('punctuation remains unchanged when shifting', () => {
  expect(caeserCipher('Hello, World!', 3)).toBe("Khoor, Zruog!");
});

test('negative shift lowercase string', () => {
  expect(caeserCipher("xyz", -3)).toBe("uvw");
});

test('negative shift with wrapping lowecaser string', () => {
  expect(caeserCipher("abc", -3)).toBe("xyz");
});

test('negative shift with wrapping uppercase string', () => {
  expect(caeserCipher("ABC", -3)).toBe("XYZ");
});

test('negative shift uppercase string', () => {
  expect(caeserCipher("XYZ,", -3)).toBe("UVW,");
});











