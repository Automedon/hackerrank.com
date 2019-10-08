/*
The positive lookahead (?=) asserts regex_1 to be immediately followed by regex_2. The lookahead is excluded from the match. It does not return matches of regex_2. The lookahead only asserts whether a match is possible or not.

ach22.png

Task

You have a test string .
Write a regex that can match all occurrences of o followed immediately by oo in .

Note

This is a regex only challenge. You are not required to write code.
You have to fill the regex pattern in the blank (_________).
*/
var Regex_Pattern = /o(?=oo)/g;
