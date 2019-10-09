/*
Objective
In this challenge, we practice solving problems based on the Central Limit Theorem. We recommend reviewing the Central Limit Theorem Tutorial before attempting this challenge.

Task
The number of tickets purchased by each student for the University X vs. University Y football game follows a distribution that has a mean of  and a standard deviation of .

A few hours before the game starts,  eager students line up to purchase last-minute tickets. If there are only  tickets left, what is the probability that all  students will be able to purchase tickets?

Input Format

There are  lines of input (shown below):

250
100
2.4
2.0
The first line contains the number of last-minute tickets available at the box office. The second line contains the number of students waiting to buy tickets. The third line contains the mean number of purchased tickets, and the fourth line contains the standard deviation.

If you do not wish to read this information from stdin, you can hard-code it into your program.

Output Format

Print the probability that  students can successfully purchase the remaining  tickets, rounded to a scale of  decimal places (i.e.,  format).
*/
function processData(input) {
        function erf(z) {
        const t = 1.0 / (1.0 + 0.5 * Math.abs(z));
        const ans = 1 - t * Math.exp( -z*z   -   1.26551223 +
                                            t * ( 1.00002368 +
                                            t * ( 0.37409196 + 
                                            t * ( 0.09678418 + 
                                            t * (-0.18628806 + 
                                            t * ( 0.27886807 + 
                                            t * (-1.13520398 + 
                                            t * ( 1.48851587 + 
                                            t * (-0.82215223 + 
                                            t * ( 0.17087277))))))))));
        if (z >= 0) return  ans;
        else        return -ans;
    }
    input=input.split`\n`

    let ticket = input[0]*1
    let student = input[1]*1
    let mean = input[2]*1
    let sd = input[3]*1
        function cumulative(mean, sd, x) {
        let parameter = (x - mean) / (sd * Math.sqrt(2));
        return (0.5) * (1 + erf(parameter));
    }
        let sampleMean = student * mean;
        let sampleSd = Math.sqrt(student) * sd;
        let result = cumulative(sampleMean, sampleSd, ticket);
        console.log(result);
} 
