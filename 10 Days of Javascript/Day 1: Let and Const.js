/*
Objective

In this challenge, we practice declaring variables using the let and const keywords. Check out the attached tutorial for more details.

Task

Declare a constant variable, , and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
Read a number, , denoting the radius of a circle from stdin.
Use  and  to calculate the  and  of a circle having radius .
Print  as the first line of output and print  as the second line of output.
Input Format

A single integer, , denoting the radius of a circle.

Constraints

 is a floating-point number scaled to at most  decimal places.
Output Format

Print the following two lines:

On the first line, print the  of the circle having radius .
On the second line, print the  of the circle having radius .
Sample Input 0

2.6
Sample Output 0

21.237166338267002
16.336281798666924
Explanation 0

Given the radius , we calculate the following:

We then print  as our first line of output and  as our second line of output.
*/
function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r = readLine()
    // Print the area of the circle:
    console.log(Math.PI*r*r)
    // Print the perimeter of the circle:
    console.log(Math.PI*2*r)
       try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}
