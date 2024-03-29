// 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

// BFS 队列法
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let res = [];
  while (queue.length) {
    const node = queue.shift();
    res.push(node.val);

    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return res;
};
