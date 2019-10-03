/*
The Fibonacci Sequence

The Fibonacci sequence appears in nature all around us, in the arrangement of seeds in a sunflower and the spiral of a nautilus for example.

The Fibonacci sequence begins with  and  as its first and second terms. After these first two elements, each subsequent element is equal to the sum of the previous two elements.

Programmatically:

Given , return the  number in the sequence.

As an example, . The Fibonacci sequence to  is . With zero-based indexing, .

Function Description

Complete the recursive function  in the editor below. It must return the  element in the Fibonacci sequence.

fibonacci has the following parameter(s):

n: the integer index of the sequence to return
Input Format

The input line contains a single integer, .

Constraints

Output Format

Locked stub code in the editor prints the integer value returned by the  function.

Sample Input

3  
Sample Output

2
Explanation

The Fibonacci sequence begins as follows:


...

We want to know the value of . In the sequence above,  evaluates to .
*/
function fibonacci(n) {
  if(n==0 || n == 1) return n;
  let arr=[1,1];
  for (let i=1;i<n;i++)
  {arr.push(arr[i-1]+arr[i])}
  return arr[arr.length-2]
}
