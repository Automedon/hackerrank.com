/*
You are given  queries. Each query is of the form two integers described below: 
-  : Insert x in your data structure. 
-  : Delete one occurence of y from your data structure, if present. 
-  : Check if any integer is present whose frequency is exactly . If yes, print 1 else 0.

The queries are given in the form of a 2-D array  of size  where  contains the operation, and  contains the data element. For example, you are given array . The results of each operation are:

Operation   Array   Output
(1,1)       [1]
(2,2)       [1]
(3,2)                   0
(1,1)       [1,1]
(1,1)       [1,1,1]
(2,1)       [1,1]
(3,2)                   1
Return an array with the output: .

Function Description

Complete the freqQuery function in the editor below. It must return an array of integers where each element is a  if there is at least one element value with the queried number of occurrences in the current array, or 0 if there is not.

freqQuery has the following parameter(s):

queries: a 2-d array of integers
Input Format

The first line contains of an integer , the number of queries. 
Each of the next  lines contains two integers denoting the 2-d array .

Constraints

All 
Output Format

Return an integer array consisting of all the outputs of queries of type .

Sample Input 0

8
1 5
1 6
3 2
1 10
1 10
1 6
2 5
3 2
Sample Output 0

0
1
Explanation 0

For the first query of type , there is no integer whose frequency is  (). So answer is . 
For the second query of type , there are two integers in  whose frequency is  (integers =  and ). So, the answer is .

Sample Input 1

4
3 4
2 1003
1 16
3 1
Sample Output 1

0
1
Explanation 1

For the first query of type , there is no integer of frequency . The answer is . 
For the second query of type , there is one integer,  of frequency  so the answer is .

Sample Input 2

10
1 3
2 3
3 2
1 4
1 5
1 5
1 4
3 2
2 4
3 2
Sample Output 2

0
1
1
Explanation 2

When the first output query is run, the array is empty. We insert two 's and two 's before the second output query,  so there are two instances of elements occurring twice. We delete a  and run the same query. Now only the instances of  satisfy the query.
*/
function freqQuery(queries) {
    let map = {};
    let frequencyMap = {};
    let output = [];

    for (let i = 0; i < queries.length; i++) {
        const operator = queries[i][0];
        const value = queries[i][1];

        if (operator === 1) {
            if (map[value]) {
                // Remove value from frequency map.
                frequencyMap[map[value]] = frequencyMap[map[value]].filter((arrayValue) => {
                    return value !== arrayValue;
                });

                map[value]++;
            }
            else {
                map[value] = 1;
            }

            const freqMapKey = map[value];

            if(frequencyMap[freqMapKey]) {
                frequencyMap[freqMapKey].push(value);
            }
            else {
                frequencyMap[freqMapKey] = [value];
            }
        }
        else if (operator === 2) {
            if (map[value]) {
                let freqMapKey = map[value];

                // Remove value from frequency map.
                frequencyMap[freqMapKey] = frequencyMap[freqMapKey].filter((arrayValue) => {
                    return value !== arrayValue;
                });

                // Decrement count.
                map[value]--;

                freqMapKey = map[value];

                // Set new value intro frequency map.
                if(frequencyMap[freqMapKey]) {
                    frequencyMap[freqMapKey].push(value);
                }
                else {
                    frequencyMap[freqMapKey] = [value];
                }                 
            }            
        }
        else if (operator === 3) {
            let result = 0;
            const freqMapKey = value;

            if (frequencyMap[freqMapKey] && frequencyMap[freqMapKey].length > 0) {           
                result = 1;
            }

            output.push(result);
        }
    }

    return output;
}
