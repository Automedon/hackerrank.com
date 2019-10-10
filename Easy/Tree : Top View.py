/*
You are given a pointer to the root of a binary tree. Print the top view of the binary tree.
Top view means when you look the tree from the top the nodes, what you will see will be called the top view of the tree. See the example below.
You only have to complete the function.
For example :

   1
    \
     2
      \
       5
      /  \
     3    6
      \
       4
Top View : 1 -> 2 -> 5 -> 6

Input Format

You are given a function,

void topView(node * root) {

}
Constraints

1 Nodes in the tree  500

Output Format

Print the values on a single line separated by space.

Sample Input

   1
    \
     2
      \
       5
      /  \
     3    6
      \
       4
Sample Output

1 2 5 6

Explanation

   1
    \
     2
      \
       5
      /  \
     3    6
      \
       4
From the top only nodes 1,2,5,6 will be visible.
*/
def topView(root):
    nodes = [(root,0)]
    result = {}
    
    while len(nodes):
        tupleItem = nodes.pop(0)
        hd = tupleItem[1]
        t = tupleItem[0]        
        if hd not in result.keys():
            result[hd] = t.info
        if t.left:
            nodes.append((t.left,hd-1))
        if t.right:
            nodes.append((t.right,hd+1))
    for key in sorted(result): 
        print(result[key],end=" ")
