/*
Objective

In this challenge, we learn about Arrays. Check out the attached tutorial for more details.

Task

Complete the getSecondLargest function in the editor below. It has one parameter: an array, , of  numbers. The function must find and return the second largest number in .

Input Format

Locked stub code in the editor reads the following input from stdin and passes it to the function: 
The first line contains an integer, , denoting the size of the  array. 
The second line contains  space-separated numbers describing the elements in .

Constraints

, where  is the number at index .
The numbers in  are not distinct.
Output Format

Return the value of the second largest number in the  array.

Sample Input 0

5
2 3 6 6 5
Sample Output 0

5
Explanation 0

Given the array , we see that the largest value in the array is  and the second largest value is . Thus, we return  as our answer.
*/

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    return [...new Set(nums)].sort((a,b)=>b-a)[1]
}
