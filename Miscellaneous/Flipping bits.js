/*
You will be given a list of 32 bit unsigned integers. Flip all the bits ( and ) and return the result as an unsigned integer.

Example

. We're working with 32 bits, so:

Return .

Function Description

Complete the flippingBits function in the editor below.

flippingBits has the following parameter(s):

int n: an integer
Returns

int: the unsigned decimal integer result
Input Format

The first line of the input contains , the number of queries.
Each of the next  lines contain an integer, , to process.
*/
function flippingBits(N) {
    return parseInt(N.toString(2).padStart(32,0)
            .split("")
            .map(e => (e === "0" ? "1" : "0"))
            .join(""),
        2,
    );
}
