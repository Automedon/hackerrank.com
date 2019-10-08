/*
The * tool will match zero or more repetitions of character/character class/group.

ach12.png

For Example:

w* : It will match the character w  or more times.
[xyz]* : It will match the characters x, y or z  or more times.
\d* : It will match any digit  or more times.

Task

You have a test string .
Your task is to write a regex that will match  using the following conditions:

 should begin with  or more digits.
After that,  should have  or more lowercase letters.
 should end with  or more uppercase letters
Note

This is a regex only challenge. You are not required to write any code.
You have to fill the regex pattern in the blank (_________).
*/
var Regex_Pattern = /^\d{2,}[0a-z]*[A-Z]*$/;
