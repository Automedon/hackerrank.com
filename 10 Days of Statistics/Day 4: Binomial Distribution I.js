/*
Objective
In this challenge, we learn about binomial distributions. Check out the Tutorial tab for learning materials!

Task
The ratio of boys to girls for babies born in Russia is . If there is  child born per birth, what proportion of Russian families with exactly  children will have at least  boys?

Write a program to compute the answer using the above parameters. Then print your result, rounded to a scale of  decimal places (i.e.,  format).

Input Format

A single line containing the following values:

1.09 1
If you do not wish to read this information from stdin, you can hard-code it into your program.

Output Format

Print a single line denoting the answer, rounded to a scale of  decimal places (i.e.,  format).
*/
function processData(input) {
    function main(a, b) {
    let n = 6; let x = 3; 
    let p = a / (a + b);

    let res = 0;
    for (let i = x; i <= n; i++) { 
        res += solve(i, n, p);
    }
    console.log(res.toFixed(3));
    }

    function solve(x, n, p) {
    return nCr(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x);
    }

    function nCr(n, x) { 
    let c = 1;
    for (let i = 1; i <= x; i++) { 
        c *= (n - i + 1) / i;
    }
    return c;
    }
    return main(input.split` `[0]*1 ,input.split` `[1]*1)
} 
