/*
We define a word character to be any of the following:

An English alphabetic letter (i.e., a-z and A-Z).
A decimal digit (i.e., 0-9).
An underscore (i.e., _, which corresponds to ASCII value ).
We define a word to be a contiguous sequence of one or more word characters that is preceded and succeeded by one or more occurrences of non-word-characters or line terminators. For example, in the string I l0ve-cheese_?, the words are I, l0ve, and cheese_.

We define a sub-word as follows:

A sequence of word characters (i.e., English alphabetic letters, digits, and/or underscores) that occur in the same exact order (i.e., as a contiguous sequence) inside another word.
It is preceded and succeeded by word characters only.
Given  sentences consisting of one or more words separated by non-word characters, process  queries where each query consists of a single string, . To process each query, count the number of occurrences of  as a sub-word in all  sentences, then print the number of occurrences on a new line.

Input Format

The first line contains an integer, n, denoting the number of sentences.
Each of the  subsequent lines contains a sentence consisting of words separated by non-word characters.
The next line contains an integer, , denoting the number of queries.
Each line  of the  subsequent lines contains a string, , to check.

Constraints

Output Format

For each query string, , print the total number of times it occurs as a sub-word within all words in all  sentences.

Sample Input

1
existing pessimist optimist this is
1
is
Sample Output

3
Explanation

We must count the number of times  is occurs as a sub-word in our  input sentence(s):

 occurs  time as a sub-word of existing.
 occurs  time as a sub-word of pessimist.
 occurs  time as a sub-word of optimist.
While  is a substring of the word this, it's followed by a blank space; because a blank space is non-alphabetic, non-numeric, and not an underscore, we do not count it as a sub-word occurrence.
While  is a substring of the word is in the sentence, we do not count it as a match because it is preceded and succeeded by non-word characters (i.e., blank spaces) in the sentence. This means it doesn't count as a sub-word occurrence.
Next, we sum the occurrences of  as a sub-word of all our words as . Thus, we print  on a new line.
*/
function processData(input) {
  input = input.split('\n');
  let n = parseInt(input[0]);
  let lines = input.slice(1, n + 1);
  let q = parseInt(input[n + 1]);
  let queries = input.slice(n + 2);
  let count, regx; 
  queries.forEach(query => {
      count = 0;
      regx = new RegExp('\\B' + query + '\\B', 'g');
      lines.forEach(line => {
          count += (line.match(regx) || []).length;
      });
      console.log(count);
  })
} 
