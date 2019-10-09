/*
Objective
In this challenge, we go further with Poisson distributions. We recommend reviewing the previous challenge's Tutorial before attempting this problem.

Task
The manager of a industrial plant is planning to buy a machine of either type  or type . For each day’s operation:

The number of repairs, , that machine  needs is a Poisson random variable with mean . The daily cost of operating  is .
The number of repairs, , that machine  needs is a Poisson random variable with mean . The daily cost of operating  is .
Assume that the repairs take a negligible amount of time and the machines are maintained nightly to ensure that they operate like new at the start of each day. Find and print the expected daily cost for each machine.

Input Format

A single line comprised of  space-separated values denoting the respective means for  and :

0.88 1.55
If you do not wish to read this information from stdin, you can hard-code it into your program.

Output Format

There are two lines of output. Your answers must be rounded to a scale of  decimal places (i.e.,  format):

On the first line, print the expected daily cost of machine .
On the second line, print the expected daily cost of machine .
*/
function processData(input) {
    function main(m, n) {
    console.log(solveA(m).toFixed(3));
    console.log(solveB(n).toFixed(3));
}

    function solveA(m) {
    return (m + Math.pow(m, 2)) * 40 + 160;
    }

    function solveB(n) {
    return (n + Math.pow(n, 2)) * 40 + 128;
    }
    return main(input.split` `[0]*1,input.split` `[1]*1)
}
