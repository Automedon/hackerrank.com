/*
In an array, , the elements at indices  and  (where ) form an inversion if . In other words, inverted elements  and  are considered to be "out of order". To correct an inversion, we can swap adjacent elements.

For example, consider the dataset . It has two inversions:  and . To sort the array, we must perform the following two swaps to correct the inversions:

Given  datasets, print the number of inversions that must be swapped to sort each dataset on a new line.

Function Description

Complete the function countInversions in the editor below. It must return an integer representing the number of inversions required to sort the array.

countInversions has the following parameter(s):

arr: an array of integers to sort .
Input Format

The first line contains an integer, , the number of datasets.

Each of the next  pairs of lines is as follows:

The first line contains an integer, , the number of elements in .
The second line contains  space-separated integers, .
Constraints

Output Format

For each of the  datasets, return the number of inversions that must be swapped to sort the dataset.

Sample Input

2  
5  
1 1 1 2 2  
5  
2 1 3 1 2
Sample Output

0  
4   
Explanation

We sort the following  datasets:

 is already sorted, so there are no inversions for us to correct. Thus, we print  on a new line.
We performed a total of  swaps to correct inversions.
*/
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countInversions function below.
function countInversions(arr, len = arr.length) {
    // base case if length less than 1
    if (arr.length <= 1) {
        return [arr, 0];
    }

    // Get midpoint and split array
    const mid = Math.floor(arr.length / 2);
    const arr1 = arr.slice(0, mid);
    const arr2 = arr.slice(mid);

    // Merge sort left and right splits
    const left = countInversions(arr1, len);
    const right = countInversions(arr2, len);

    // Merge back while passing the inversion count
    const merged = merge(left[0], right[0], left[1] + right[1]);

    // If the merged array is equal to original array length, return count
    // Else, return an array with the merged array and count
    if (merged[0].length === len) {
        return merged[1];
    }
    else {
        return [merged[0], merged[1]];
    }
}

function merge(left, right, inversions) {
    // Create a sorted array
    // Shift off the lesser of left or right until one is empty
    // Add inversion count of left array length if left[0] is greater than right[0]
    let sorted = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] > right[0]) {
            sorted.push(right.shift());
            inversions += left.length;
        } else {
            sorted.push(left.shift());
        }
    }

    sorted = sorted.concat(left).concat(right);

    return [sorted, inversions];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = countInversions(arr);

        ws.write(result + '\n');
    }

    ws.end();
}
