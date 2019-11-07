# Daily Challenge #7 - Factorial Decomposition

https://dev.to/thepracticaldev/daily-challenge-7-factorial-decomposition-176o

The aim of this challenge is to decompose n!(factorial n) into its prime factors. Prime numbers should be in increasing order. When the exponent of a prime number is 1, don't print the exponent.

### Examples:

n = 22; decomp(22) -> "2<sup>19</sup> \* 3<sup>9</sup> \* 5<sup>4</sup> \* 7<sup>3</sup> \* 11<sup>2</sup> \* 13 \* 17 \* 19"

n = 25; decomp(25) -> "2<sup>22</sup> \* 3<sup>10</sup> \* 5<sup>6</sup> \* 7<sup>3</sup> \* 11<sup>2</sup> \* 13 \* 17 \* 19 \* 23"

### Explanation:

n = 12; decomp(12) -> "2<sup>10</sup> \* 3<sup>5</sup> \* 5<sup>2</sup> \* 7 \* 11"

12! is divisible by 2 ten times, by 3 five times, by 5 two times and by 7 and 11 only once.
