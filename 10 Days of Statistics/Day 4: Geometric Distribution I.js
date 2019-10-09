/*
Objective
In this challenge, we learn about geometric distributions. Check out the Tutorial tab for learning materials!

Task
The probability that a machine produces a defective product is . What is the probability that the  defect is found during the  inspection?

Input Format

The first line contains the respective space-separated numerator and denominator for the probability of a defect, and the second line contains the inspection we want the probability of being the first defect for:

1 3
5
If you do not wish to read this information from stdin, you can hard-code it into your program.

Output Format

Print a single line denoting the answer, rounded to a scale of  decimal places (i.e.,  format).
*/
function processData(input) {
    function main(favourable, total, n) {
    let p = favourable / total;
    console.log(solve(n, p).toFixed(3));
}

    function solve(n, p) {
    return Math.pow(1-p, n-1) * p;
    }
    let a = input.split`\n`
    return main(a[0].split` `[0]*1,a[0].split` `[1]*1,a[1]*1)
} 
