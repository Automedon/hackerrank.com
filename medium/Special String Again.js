/*
A string is said to be a special string if either of two conditions is met:

All of the characters are the same, e.g. aaa.
All characters except the middle one are the same, e.g. aadaa.
A special substring is any substring of a string which meets one of those criteria. Given a string, determine how many special substrings can be formed from it.

For example, given the string , we have the following special substrings: .

Function Description

Complete the substrCount function in the editor below. It should return an integer representing the number of special substrings that can be formed from the given string.

substrCount has the following parameter(s):

n: an integer, the length of string s
s: a string
Input Format

The first line contains an integer, , the length of . 
The second line contains the string .

Constraints

 
Each character of the string is a lowercase alphabet, .

Output Format

Print a single line containing the count of total special substrings.

Sample Input 0

5
asasd
Sample Output 0

7 
Explanation 0

The special palindromic substrings of  are 

Sample Input 1

7
abcbaba
Sample Output 1

10 
Explanation 1

The special palindromic substrings of  are 

Sample Input 2

4
aaaa
Sample Output 2

10
Explanation 2

The special palindromic substrings of  are 
*/
function substrCount(n, s) {
    const m = [];
    let ans = 0, c = null, lc = 1;
    for (let i = 0; i < n; i++) {
        if (c === s[i]) {
            lc++;
        } else {
            if (c !== null) m.push([c, lc]);
            c = s[i];
            lc = 1;
        }
    }
    m.push([c, lc]);
    for (let i = 0, ml = m.length; i < ml; i++) {
        ans += Math.floor(m[i][1] * (m[i][1] + 1) / 2);
        if (i === 0 || i === ml - 1) continue;
        if (m[i][1] === 1 && m[i-1][0] === m[i+1][0]) {
            ans += Math.min(m[i - 1][1], m[i + 1][1]);
        }      
    }
    return ans;
}
