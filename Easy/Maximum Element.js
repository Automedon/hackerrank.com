/*
You have an empty sequence, and you will be given  queries. Each query is one of these three types:

1 x  -Push the element x into the stack.
2    -Delete the element present at the top of the stack.
3    -Print the maximum element in the stack.
Input Format

The first line of input contains an integer, . The next  lines each contain an above mentioned query. (It is guaranteed that each query is valid.)

Constraints



Output Format

For each type  query, print the maximum element in the stack on a new line.

Sample Input

10
1 97
2
1 20
2
1 26
1 20
2
3
1 91
3
Sample Output

26
91
*/
function processData(input) {
   let stack = []
   input=input.split`\n`.slice(1).map(v=>{
       if (v==2) return stack.pop()
       else if (v==3) console.log(Math.max(...stack))
       else return stack.push(v.split` `[1]*1)
   })
} 
