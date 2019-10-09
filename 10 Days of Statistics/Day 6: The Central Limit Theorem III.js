/*
Objective
In this challenge, we practice solving problems based on the Central Limit Theorem. We recommend reviewing the Central Limit Theorem Tutorial before attempting this challenge.

Task
You have a sample of  values from a population with mean  and with standard deviation . Compute the interval that covers the middle  of the distribution of the sample mean; in other words, compute  and  such that . Use the value of . Note that  is the z-score.

Input Format

There are five lines of input (shown below):

100
500
80
.95
1.96
The first line contains the sample size. The second and third lines contain the respective mean () and standard deviation (). The fourth line contains the distribution percentage we want to cover (as a decimal), and the fifth line contains the value of .

If you do not wish to read this information from stdin, you can hard-code it into your program.

Output Format

Print the following two lines of output, rounded to a scale of  decimal places (i.e.,  format):

On the first line, print the value of .
On the second line, print the value of .
*/
function processData(input) {
    input=input.split`\n`
        let sample =input[0]*1
        let mean = input[1]*1
        let sd = input[2]*1
        let confidenceInterval = input[3]*1
        let zScore = input[4]*1
        let result = interval(zScore, sd, sample);
        console.log(mean - result);
        console.log(mean + result);
    function interval(zScore,sd,sample) {
        return zScore * sd / Math.sqrt(sample);
    }
} 
