/*
Objective
In this challenge, we learn about Poisson distributions. Check out the Tutorial tab for learning materials!

Task
A random variable, , follows Poisson distribution with mean of . Find the probability with which the random variable  is equal to .

Input Format

The first line contains 's mean. The second line contains the value we want the probability for:

2.5
5
If you do not wish to read this information from stdin, you can hard-code it into your program.

Output Format

Print a single line denoting the answer, rounded to a scale of  decimal places (i.e.,  format).
*/
function processData(input) {
    function main(m, k) {
    console.log(solve(m, k).toFixed(3));
    }

    function solve(m, k) {
    return Math.pow(m, k) * Math.pow(2.718, -m) / factorial(k);
    }

    function factorial(k) {
    let f = 1;
    while (k) { 
        f *= k;
        k--;
    }
    return f;
    }
    return main(input.split`\n`[0]*1,input.split`\n`[1]*1)
} 
