/*
Alternations, denoted by the | character, match a single item out of several possible items separated by the vertical bar. When used inside a character class, it will match characters; when used inside a group, it will match entire expressions (i.e., everything to the left or everything to the right of the vertical bar). We must use parentheses to limit the use of alternations.

ach17.png

For example:

(Bob|Kevin|Stuart) will match either Bob or Kevin or Stuart.
([a-f]|[A-F]) will match any of the following characters: a, b, c, d, e, f, A, B, C, D, E, or F.
Task

Given a test string, , write a RegEx that matches  under the following conditions:

 must start with Mr., Mrs., Ms., Dr. or Er..
The rest of the string must contain only one or more English alphabetic letters (upper and lowercase).
Note: This is a RegEx-only challenge. You are not required to write code; you simply need to fill in the blank.
*/
var Regex_Pattern = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[a-zA-Z]{1,}$/;
