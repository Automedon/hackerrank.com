/*
The negative lookahead (?!) asserts regex_1 not to be immediately followed by regex_2. Lookahead is excluded from the match (do not consume matches of regex_2), but only assert whether a match is possible or not.

ach23.png

Task

You have a test String .
Write a regex which can match all characters which are not immediately followed by that same character.

Example

If  = goooo, then regex should match goooo. Because the first g is not follwed by g and the last o is not followed by o.

Note

This is a regex only challenge. You are not required to write a code.
You have to fill the regex pattern in the blank (_________).
*/
var Regex_Pattern = /(.)(?!\1)/g;
