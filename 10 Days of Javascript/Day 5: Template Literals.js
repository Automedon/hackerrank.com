/*
Objective

In this challenge, we practice using JavaScript Template Literals. Check the attached tutorial for more details.

Task

The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.

Complete the function in the editor so that it does the following:

Finds the initial values of  and  by plugging the area and perimeter values into the formula:
where  is the rectangle's area and  is its perimeter.
Creates an array consisting of  and  and sorts it in ascending order.
Returns the sorted array.
Input Format

The first line contains an integer denoting . 
The second line contains an integer denoting .

Constraints

Output Format

Return an array consisting of  and , sorted in ascending order.

Sample Input 0

10
14
Sample Output 0

10
14
Explanation 0

The locked code in the editor passes the following arrays to the tag function:

The value of  is [ 'The area is: ', '.\nThe perimeter is: ', '.' ].
The value of  is [ 140, 48 ], where the first value denotes the rectangle's area, , and the second value denotes its perimeter, .
When we plug those values into our formula, we get the following:

We then store these values in an array, [14, 10], sort the array, and return the sorted array, [10, 14], as our answer.
*/
/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    let A = expressions[0];
    let P = expressions[1];
    const s1 = (P + (Math.sqrt((P * P) - 16 * A))) / 4;
    const s2 = (P - (Math.sqrt((P * P) - 16 * A))) / 4;
    return [s1,s2].sort((a,b)=>a-b)
}
