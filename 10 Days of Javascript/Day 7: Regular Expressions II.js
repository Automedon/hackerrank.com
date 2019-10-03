/*
Task

Complete the function in the editor below by returning a RegExp object, , that matches any string  satisfying both of the following conditions:

String  starts with the prefix Mr., Mrs., Ms., Dr., or Er.
The remainder of string  (i.e., the rest of the string after the prefix) consists of one or more upper and/or lowercase English alphabetic letters (i.e., [a-z] and [A-Z]).
Constraints

The length of string  is  .
Output Format

The function must return a RegExp object that matches any string  satisfying both of the given conditions.

Sample Input 0

Mr.X
Sample Output 0

true
Explanation 0

This string starts with Mr., followed by an English alphabetic letter (X).

Sample Input 1

Mrs.Y
Sample Output 1

true
Explanation 1

This string starts with Mrs., followed by an English alphabetic letter (Y).

Sample Input 2

Dr#Joseph
Sample Output 2

false
Explanation 2

This string starts with Dr# instead of Dr., so it's invalid.

Sample Input 3

Er .Abc
Sample Output 3

false
Explanation 3

This string starts with Er but there is a space before the period (.), making the string invalid.
*/
function regexVar() {
    return /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)\s?[A-Za-z]+$/
}
