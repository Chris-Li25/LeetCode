// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。


// 队列法
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let res = [];
  while (queue.length) {
    let tmp = [];
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      tmp.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(tmp);
  }
  return res;
};
