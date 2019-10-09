/*
Objective
In this challenge, we practice solving problems based on the Central Limit Theorem. Check out the Tutorial tab for learning materials!

Task
A large elevator can transport a maximum of  pounds. Suppose a load of cargo containing  boxes must be transported via the elevator. The box weight of this type of cargo follows a distribution with a mean of  pounds and a standard deviation of  pounds. Based on this information, what is the probability that all  boxes can be safely loaded into the freight elevator and transported?

Input Format

There are  lines of input (shown below):

9800
49
205
15
The first line contains the maximum weight the elevator can transport. The second line contains the number of boxes in the cargo. The third line contains the mean weight of a cargo box, and the fourth line contains its standard deviation.

If you do not wish to read this information from stdin, you can hard-code it into your program.

Output Format

Print the probability that the elevator can successfully transport all  boxes, rounded to a scale of  decimal places (i.e.,  format).
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

    let maxWeight = input[0]*1
    let boxNum = input[1]*1
    let mean = input[2]*1
    let sd = input[3]*1
        function cumulative(mean, sd, x) {
        let parameter = (x - mean) / (sd * Math.sqrt(2));
        return (0.5) * (1 + erf(parameter));
    }
        let sampleMean = boxNum * mean;
        let sampleSd = Math.sqrt(boxNum) * sd;
        let result = cumulative(sampleMean, sampleSd, maxWeight);
        console.log(result);
} 
