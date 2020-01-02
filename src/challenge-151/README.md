# Daily Challenge #151 - Reverse Parentheses

https://dev.to/thepracticaldev/daily-challenge-151-reverse-parentheses-28h0

## Setup

For this challenge, you will be given a string of text and valid parentheses as input. Write a function that will return the string with the text inside parentheses reversed. If there are nested parentheses, then that too must be reversed. This pattern should repeat for however many layers of parentheses there are.

## Examples

```js
reverseInParens("h(el)lo") == "h(le)lo");
reverseInParens("a ((d e) c b)") == "a (b c (d e))");
```

## Tests

```
reverseInParens("one (ruof ((rht)ee) owt)")
reverseInParens("one (two (three) four)")
```
