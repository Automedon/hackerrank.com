/*
Objective
In this challenge, we go further with binomial distributions. We recommend reviewing the previous challenge's Tutorial before attempting this problem.

Task
A manufacturer of metal pistons finds that, on average,  of the pistons they manufacture are rejected because they are incorrectly sized. What is the probability that a batch of  pistons will contain:

No more than  rejects?
At least  rejects?
Input Format

A single line containing the following values (denoting the respective percentage of defective pistons and the size of the current batch of pistons):

12 10
If you do not wish to read this information from stdin, you can hard-code it into your program.

Output Format

Print the answer to each question on its own line:

The first line should contain the probability that a batch of  pistons will contain no more than  rejects.
The second line should contain the probability that a batch of  pistons will contain at least  rejects.
Round both of your answers to a scale of  decimal places (i.e.,  format).
*/
function processData(input) {
    function main(a, b) {
    let n = b; let x = 2; 
    let p = a / 100;

    let res = 0;
    for (let i = 0; i <= 2; i++) {
        res += solve(i, n, p);
    }
    console.log(res.toFixed(3));

    res = 1 - res + solve(2, n, p);
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
    return c
    } 
    return main(input.split` `[0]*1,input.split` `[1]*1)
}
