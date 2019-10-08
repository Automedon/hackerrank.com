/*
The + tool will match one or more repetitions of character/character class/group.

ach13.png

For Example:

w+ : It will match the character w  or more times.
[xyz]+ : It will match the character x, y or z  or more times.
\d+ : It will match any digit  or more times.

Task

You have a test string .
Your task is to write a regex that will match  using the following conditions:

 should begin with  or more digits.
After that,  should have  or more uppercase letters.
 should end with  or more lowercase letters.
Note

This is a regex only challenge. You are not required to write any code.
You have to fill the regex pattern in the blank (_________).
*/
var Regex_Pattern = /^\d{1,}[A-Z]{1,}[a-z]{1,}$/;
