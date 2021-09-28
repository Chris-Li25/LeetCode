// 请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

// 哈希表法
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;
  let node = head;
  let newHead = new Node();
  let newNode = newHead;
  const map = new Map();
  while (node) {
    newNode.next = new Node(node.val);
    map.set(node, newNode.next);
    newNode = newNode.next;
    node = node.next;
  }

  node = head;
  newNode = newHead;

  while (node) {
    newNode.next.random = map.get(node.random);
    node = node.next;
    newNode = newNode.next;
  }

  return newHead.next;
};

// 迭代 + 节点拆分
var copyRandomList2 = function (head) {
  if (!head) return null;
  let node = head;
  // 复制节点，将新节点放到原节点后面
  while (node) {
    node.next = new Node(node.val, node.next);
    node = node.next.next;
  }

  node = head;
  // 构建新节点的random指向
  while (node) {
    if (node.random !== null) node.next.random = node.random.next;
    node = node.next.next;
  }

  // 拆分链表
  let newNode = head.next;
  let res = newNode;
  node = head;
  while (node.next && newNode.next) {
    node.next = node.next.next;
    newNode.next = newNode.next.next;
    node = node.next;
    newNode = newNode.next;
  }
  node.next = null;

  return res;
};
