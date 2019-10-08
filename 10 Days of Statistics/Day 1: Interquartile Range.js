/*
Objective 
In this challenge, we practice calculating the interquartile range. We recommend you complete the Quartiles challenge before attempting this problem.

Task 
The interquartile range of an array is the difference between its first () and third () quartiles (i.e., ).

Given an array, , of  integers and an array, , representing the respective frequencies of 's elements, construct a data set, , where each  occurs at frequency . Then calculate and print 's interquartile range, rounded to a scale of  decimal place (i.e.,  format).

Tip: Be careful to not use integer division when averaging the middle two elements for a data set with an even number of elements, and be sure to not include the median in your upper and lower data sets.

Input Format

The first line contains an integer, , denoting the number of elements in arrays  and . 
The second line contains  space-separated integers describing the respective elements of array . 
The third line contains  space-separated integers describing the respective elements of array .

Constraints

, where  is the  element of array .
, where  is the  element of array .
The number of elements in  is equal to .
Output Format

Print the interquartile range for the expanded data set on a new line. Round your answer to a scale of  decimal place (i.e., format).

Sample Input

6
6 12 8 10 20 16
5 4 3 2 1 5
Sample Output

9.0
Explanation

The given data is:

InterquartileRange

First, we create data set  containing the data from set  at the respective frequencies specified by : 
As there are an even number of data points in the original ordered data set, we will split this data set exactly in half:

Lower half (L): 6, 6, 6, 6, 6, 8, 8, 8, 10, 10

Upper half (U): 12, 12, 12, 12, 16, 16, 16, 16, 16, 20

Next, we find . There are  elements in  half, so  is the average of the middle two elements:  and . Thus, .

Next, we find .There are  elements in  half, so  is the average of the middle two elements:  and . Thus, .

From this, we calculate the interquartile range as  and print  as our answer.
*/
function processData(input) {
   input=input.split`\n`
   let a1 = input[1].split` `
   let a2 = input[2].split` `.map(v=>v*1)
   let a3 = a1.map((v,i)=>`${v} `.repeat(a2[i])).map(v=>v.trim()).sort((a,b)=>a.split` `[0]*1-b.split` `[0]*1).join` `
   console.log(quart(a3).toFixed(1))
} 
function quart(input) {
    input=input.split` `.sort((a,b)=>a-b)
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
        return t-f
    } else {
        let z = median(input)
        let f = median(input.slice(0,input.length/2).join` `.split` `)
        let t = median(input.slice(input.length/2).join` `.split` `)
        return t-f
    }
} 
