# Extend Hex

## Instructions

Write a function called `extendHex`that takes a short hex code as input and returns the corresponding full hex code. A short hex code is a hex code with 3 characters instead of 6, where each character represents a color component (red, green, or blue) in the range 0-255. To get the full hex code, each color component should be repeated so that the hex code has 6 characters. For example, the short hex code `#abc` should be extended to` #aabbcc`.

## Examples

```
extendHex("#abc"); // expected output: "#aabbcc"
extendHex("abc"); // expected output: "#aabbcc"
extendHex("#AbC"); // expected output: "#AABBCC"
extendHex("#f09"); // expected output: "#ff0099"
```

## Acceptance Criteria

- When the `extendHex()` function is called with a short hex code, it should return the corresponding full hex code.
- The function should handle short hex codes with or without the # prefix.
- The function should handle short hex codes with mixed case characters.
- The function should handle short hex codes with only one character per color.
