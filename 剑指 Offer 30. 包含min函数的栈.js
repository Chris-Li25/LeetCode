/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
 */

/**
 * 时间复杂度需要为O(1)，即没有循环遍历。  利用栈后进后出的特性，当一个数入栈时，直到有更小的数入栈之前，最小值都是该数，因此同样可以用栈来储存最小值
 */

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.minStack = [];
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  if (this.minStack.length) {
    var min = this.minStack[this.minStack.length - 1];
    if (min > x) {
      this.minStack.push(x);
    } else {
      this.minStack.push(min);
    }
  } else {
    this.minStack.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.minStack.pop();
  return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length) return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  if (this.minStack.length) return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
