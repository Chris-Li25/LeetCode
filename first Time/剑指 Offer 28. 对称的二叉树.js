/* 
    请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。
    
    例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
    
        1
       / \
      2   2
     / \ / \
    3  4 4  3
    但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
    
        1
       / \
      2   2
       \   \
       3    3
*/

// 递归
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return root == null ? true : recur(root.left, root.right);
};

const recur = (L, R) => {
  if (L == null && R == null) return true;
  if (L == null || R == null || L.val != R.val) return false;
  return recur(L.left, R.right) && recur(L.right, R.left);
};
