/*
Objective
In this challenge, we learn about normal distributions. Check out the Tutorial tab for learning materials!

Task
In a certain plant, the time taken to assemble a car is a random variable, , having a normal distribution with a mean of  hours and a standard deviation of  hours. What is the probability that a car can be assembled at this plant in:

Less than  hours?
Between  and  hours?
Input Format

There are  lines of input (shown below):

20 2
19.5
20 22
The first line contains  space-separated values denoting the respective mean and standard deviation for . The second line contains the number associated with question . The third line contains  space-separated values describing the respective lower and upper range boundaries for question .

If you do not wish to read this information from stdin, you can hard-code it into your program.

Output Format

There are two lines of output. Your answers must be rounded to a scale of  decimal places (i.e.,  format):

On the first line, print the answer to question  (i.e., the probability that a car can be assembled in less than  hours).
On the second line, print the answer to question  (i.e., the probability that a car can be assembled in between  to  hours).
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
    let mean = input[0].split` `[0]*1
    let sd = input[0].split` `[1]*1
    let x1 = input[1]*1
    let y1 = input[2].split` `[0]*1
    let y2 = input[2].split` `[1]*1
        function cumulative(mean, sd, x) {
        let parameter = (x - mean) / (sd * Math.sqrt(2));
        return (0.5) * (1 + erf(parameter));
    }
    console.log(cumulative(mean, sd, x1));
    console.log(cumulative(mean, sd, y2) - cumulative(mean, sd, y1));
} 
