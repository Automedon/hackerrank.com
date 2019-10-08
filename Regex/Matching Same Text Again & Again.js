/*
This tool (\1 references the first capturing group) matches the same text as previously matched by the capturing group.

ach18.png

For Example:

(\d)\1: It can match 00, 11, 22, 33, 44, 55, 66, 77, 88 or 99.

Task

You have a test string .
Your task is to write a regex that will match  with the following conditions:

 must be of length: 20
 character: lowercase letter.
 character: word character.
 character: whitespace character.
 character: non word character.
 character: digit.
 character: non digit.
 character: uppercase letter.
 character: letter (either lowercase or uppercase).
 character: vowel (a, e, i , o , u, A, E, I, O or U).
 character: non whitespace character.
 character: should be same as 1st character.
 character: should be same as 2nd character.
 character: should be same as 3rd character.
 character: should be same as 4th character.
 character: should be same as 5th character.
 character: should be same as 6th character.
 character: should be same as 7th character.
 character: should be same as 8th character.
 character: should be same as 9th character.
 character: should be same as 10th character.
Note

This is a regex only challenge. You are not required to write code.
You have to fill the regex pattern in the blank (_________).
*/
var Regex_Pattern = /^([a-z])(\w)(\s)(\W)(\d)(\D)([A-Z])([a-zA-Z])([aeiouAEIOU])(\S)\1\2\3\4\5\6\7\8\9\10$/
