/*
Objective 
In this challenge, we practice calculating quartiles. Check out the Tutorial tab for learning materials and an instructional video!

Task 
Given an array, , of  integers, calculate the respective first quartile (), second quartile (), and third quartile (). It is guaranteed that , , and  are integers.

Input Format

The first line contains an integer, , denoting the number of elements in the array. 
The second line contains  space-separated integers describing the array's elements.

Constraints

, where  is the  element of the array.
Output Format

Print  lines of output in the following order:

The first line should be the value of .
The second line should be the value of .
The third line should be the value of .
Sample Input

9
3 7 8 5 12 14 21 13 18
Sample Output

6
12
16
Explanation

. When we sort the elements in non-decreasing order, we get . It's easy to see that .

As there are an odd number of data points, we do not include the median (the central value in the ordered list) in either half:

Lower half (L): 3, 5, 7, 8

Upper half (U): 13, 14, 18, 21

Now, we find the quartiles:

 is the . So, .
 is the . So, .
 is the . So, .
*/
function processData(input) {
    input=input.split`\n`[1].split` `.sort((a,b)=>a-b)
    function median(arr){
        arr=arr.map(v=>v*1)

        if (arr.length%2!==0){
            return arr[~~(arr.length/2)]
        } else {
            return arr.slice(Math.floor(arr.length/2)-1,Math.ceil(arr.length/2)+1).reduce((a,b)=>a+b,0)/2
        }
    }
    if (input.length%2!==0){
        let z = median(input)
        let f = median(input.slice(0,input.length/2).join` `.split` `)
        let t = median(input.slice(input.length/2+1).join` `.split` `)
        console.log(f)
        console.log(z)
        console.log(t)
    } else {
        let z = median(input)
        let f = median(input.slice(0,input.length/2).join` `.split` `)
        let t = median(input.slice(input.length/2).join` `.split` `)
        console.log(f)
        console.log(z)
        console.log(t)
    }
} 
