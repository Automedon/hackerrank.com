/*
The negative lookbehind (?<!) asserts regex_1 not to be immediately preceded by regex_2. Lookbehind is excluded from the match (do not consume matches of regex_2), but only assert whether a match is possible or not.

ach25.png

Task

You have a test String .
Write a regex which can match all the occurences of characters which are not immediately preceded by vowels (a, e, i, u, o, A, E, I, O, U).

Note

This is a regex only challenge. You are not required to write a code.
You have to fill the regex pattern in the blank (_________).

JavaScript do not support lookbehind.
*/
Regex_Pattern = '(?<![aeiouAEIOU]).'
