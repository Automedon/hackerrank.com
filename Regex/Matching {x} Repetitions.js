/*
The tool {x} will match exactly  repetitions of character/character class/groups.

ach10.png

For Example:

w{3} : It will match the character w exactly  times.
[xyz]{5} : It will match the string of length  consisting of characters {x, y, z}. For example it will match xxxxx, xxxyy and xyxyz.
\d{4} : It will match any digit exactly  times.

Task

You have a test string .
Your task is to write a regex that will match  using the following conditions:

 must be of length equal to 45.
The first  characters should consist of letters(both lowercase and uppercase), or of even digits.
The last  characters should consist of odd digits or whitespace characters.
Note

This is a regex only challenge. You are not required to write any code.
You have to fill the regex pattern in the blank (_________).
*/
var Regex_Pattern = /^[^13579\s]{40}[\s13579]{5}$/
