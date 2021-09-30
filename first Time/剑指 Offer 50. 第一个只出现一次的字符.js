// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

// 使用哈希表两次遍历 第一次存储只出现一次的标识，第二次查找哈希表返回第一个只出现一次的
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  const map = new Map();
  for (let char of s) {
    if (!map.has(char)) {
      map.set(char, true);
    } else {
      map.set(char, false);
    }
  }

  for (let [key, value] of map) {
    if (value) return key;
  }

  return " ";
};
