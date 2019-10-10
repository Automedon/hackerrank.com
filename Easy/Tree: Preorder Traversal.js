/*
Complete the preOrder function in your editor below, which has  parameter: a pointer to the root of a binary tree. It must print the values in the tree's preorder traversal as a single line of space-separated values.

Input Format

Our hidden tester code passes the root node of a binary tree to your preOrder function.

Constraints

 Nodes in the tree 

Output Format

Print the tree's preorder traversal as a single line of space-separated values.

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

1 2 5 3 4 6 
*/
    function preOrder(root) {
        console.log(root.data + " ");
        if (root.left != null)
           preOrder(root.left);
        if (root.right != null)
            preOrder(root.right);
   }
