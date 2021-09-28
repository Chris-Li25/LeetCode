

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// self solution

/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let arr = [];
  let result = [];
  let node = head;
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  while (arr.length > 0) {
    result.push(arr.pop());
  }
  return result;
};

// 可以用unshift代替两次循环
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint2 = function (head) {
  let result = [];
  let node = head;
  while (node) {
    result.unshift(node.val);
    node = node.next;
  }
  return result;
};

// 递归法 本质是栈
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint3 = function (head) {
  let result = [];
  const visitor = (node) => {
    if (node !== null) {
      visitor(node.next);
      result.push(node.val);
    }
  };
  return result;
};
