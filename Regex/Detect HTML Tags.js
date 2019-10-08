/*
In this challenge, we're using regular expressions to detect the various tags used in an HTML document.

Tags come in pairs. Some tag name, , will have an opening tag, , followed by some intermediate text, followed by a closing tag, . The forward slash in a closing tag will always come before the tag name.
The exception to this is self-closing tags, which consist of a single tag (not a pair) with a forward slash after the tag name: 
Here are a few examples of tags:

The  tag is for paragraphs: 
There may be  or more spaces before or after a tag name: 
A void or empty tag involves an opening and closing tag with no intermediate characters: 
Some tags can also have attributes, such as the  tag, which is used to add a hyperlink to another document: 

In the above case,  is the tag name and  is an attribute having the value .

Task
Given  lines of HTML, find the tag names (ignore any attributes) and print them as a single line of lexicographically ordered semicolon-separated values (e.g.: ).

Input Format

The first line contains an integer, , the number of HTML fragments.
Each of the  subsequent lines contains a fragment of an HTML document.

Constraints

Each fragment contains  ASCII characters.
The fragments are chosen from Wikipedia, so analyzing and observing their markup structure may help.
Leading and trailing spaces/indentation have been trimmed from the HTML fragments.
Output Format

Print a single line containing all of the unique tag names found in the input. Your output tags should be semicolon-separated and ordered lexicographically (i.e.: alphabetically). Do not print the same tag name more than once.

Sample Input

2
<p><a href="http://www.quackit.com/html/tutorial/html_links.cfm">Example Link</a></p>
<div class="more-info"><a href="http://www.quackit.com/html/examples/html_links_examples.cfm">More Link Examples...</a></div>
Sample Output

a;div;p
Explanation

The first line contains  tag names: .
The second line contains  tag names: .
Our set of unique tag names is .
When we order these alphabetically and print them as semicolon-separated values, we get "".
*/
function processData(input) {
    return console.log([...new Set(input.match(/(?<=[<])\w+(?=\s)?/g).sort())].join`;`)
} 
