/*
The negated character class [^] matches any character that is not in the square brackets.

ach08.png

Task

You have a test string .
Your task is to write a regex that will match  with the following conditions:

 must be of length 6.
First character should not be a digit (  or  ).
Second character should not be a lowercase vowel (  or  ).
Third character should not be b, c, D or F.
Fourth character should not be a whitespace character ( \r, \n, \t, \f or <space> ).
Fifth character should not be a uppercase vowel (  or  ).
Sixth character should not be a . or , symbol.
Note

This is a regex only challenge. You are not required to write any code.
You have to fill the regex pattern in the blank (_________).
*/
var Regex_Pattern = /^\D[^aeiuo][^bcDF]\S[^AEIOU][^\.,]$/
