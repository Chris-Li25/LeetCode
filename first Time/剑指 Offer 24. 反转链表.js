// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let arr = [];
  let node = head;
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  let newHead = new ListNode();
  let newNode = newHead;
  while (arr.length) {
    newNode.next = new ListNode(arr.pop());
    newNode = newNode.next;
  }
  return newHead.next;
};

// 迭代法
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList2 = function (head) {
  let pre = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
  // 解构赋值
  // let [p, c] = [null, head];
  // 会先获取到右边到值 再赋值到左边  左边的赋值顺序要对 先赋值c的话 c.next就不是想要的结果了
  // while (c) [c.next, p, c] = [p, c, c.next];
  // return p;
};

// 递归法
var reverseList3 = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};
