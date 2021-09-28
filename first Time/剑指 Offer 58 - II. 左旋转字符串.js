// 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"

// js String方法
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  let arr = s.split("");
  for (let i = 0; i < n; i++) {
    arr.push(arr.shift());
  }
  return arr.join("");
};

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
// 2. 分治思想 分为左右两部分 最后相加 时间复杂度O(n) 空间复杂度O(1)
var reverseLeftWords = function (s, n) {
  let l = (r = "");

  for (let c of s) n-- > 0 ? (r += c) : (l += c);

  return l + r;
};

// 1. 库函数
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  // 1. 库函数
  return s.slice(n) + s.slice(0, n);
};
