// 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

// 队列
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
  let reverse = false;
  while (queue.length) {
    let tmp = [];
    const length = queue.length;
    for (i = 0; i < length; i++) {
      const node = queue.shift();
      if (reverse) {
        tmp.unshift(node.val);
      } else {
        tmp.push(node.val);
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    reverse = !reverse;
    res.push(tmp);
  }
  return res;
};
