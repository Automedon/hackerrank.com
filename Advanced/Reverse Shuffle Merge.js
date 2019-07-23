/*
Given a string, , we define some operations on the string as follows:

a.  denotes the string obtained by reversing string . Example:  


b.  denotes any string that's a permutation of string . Example:  


c.  denotes any string that's obtained by interspersing the two strings  & , maintaining the order of characters in both. For example,  & , one possible result of  could be , another could be , another could be  and so on.

Given a string  such that  for some string , find the lexicographically smallest .

For example, . We can split it into two strings of . The reverse is  and we need to find a string to shuffle in to get . The middle two characters match our reverse string, leaving the  and  at the ends. Our shuffle string needs to be . Lexicographically , so our answer is .

Function Description

Complete the reverseShuffleMerge function in the editor below. It must return the lexicographically smallest string fitting the criteria.

reverseShuffleMerge has the following parameter(s):

s: a string
Input Format

A single line containing the string .

Constraints

 contains only lower-case English letters, ascii[a-z]
Output Format

Find and return the string which is the lexicographically smallest valid .

Sample Input 0

eggegg
Sample Output 0

egg
Explanation 0

Split "eggegg" into strings of like character counts: "egg", "egg" 
reverse("egg") = "gge" 
shuffle("egg") can be "egg" 
"eggegg" belongs to the merge of ("gge", "egg")

The merge is: gge.

'egg' < 'gge'

Sample Input 1

abcdefgabcdefg
Sample Output 1

agfedcb
Explanation 1

Split the string into two strings with like characters:  and . 
Reverse  =  
Shuffle  can be  
Merge to bcdefga

Sample Input 2

aeiouuoiea
Sample Output 2

aeiou
Explanation 2

Split the string into groups of like characters:  
Reverse  =  
These merge to uoiea
*/
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the reverseShuffleMerge function below.
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
function reverseShuffleMerge(s) {
    var { dict, skipDict } = buildDictionary(s);
    var charList = [];
    s.split('').reverse().forEach((c) => {
        if (charList.length === 0) {
            charList.push(c);
            dict[c]--;
        } else {
            if (dict[c] == 0) {
                skipDict[c]--;
            } else {
                while (charList.length > 0) {
                    let last = charList[charList.length - 1];
                    if (c < last && skipDict[last] > 0) {
                        skipDict[last]--;
                        dict[last]++;
                        charList.length--;
                    } else {
                        break;
                    }
                }
                charList.push(c);
                dict[c]--;
            }
        }
    });
    return charList.join('');
}

function buildDictionary(s) {
    let dict = {};
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        if (dict[char] == undefined) {
            dict[char] = 0.5;
        } else {
            dict[char] += 0.5;
        }
    }
    return { dict, skipDict: { ...dict } }
} 

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = reverseShuffleMerge(s);

    ws.write(result + "\n");

    ws.end();
}
