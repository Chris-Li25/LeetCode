// 极简数学解法，运用JavaScript位运算 取余法

// 解题思路
// result * 10 + x % 10 取出末位 x % 10（负数结果还是负数，无需关心正负），拼接到 result 中。
// x / 10 去除末位，| 0 强制转换为32位有符号整数。
// 通过 | 0 取整，无论正负，只移除小数点部分（正数向下取整，负数向上取整）。
// result | 0 超过32位的整数转换结果不等于自身，可用作溢出判断。

/**
 * @param {number} x
 * @return {number}
 */
var reverse1 = function(x) {
    if (!((x | 0) === x)) {
        return 0
    }
    let result = 0;
    while (x !== 0) {
        result = result * 10 + x % 10;
        x = (x / 10) | 0;
    }
    return (result | 0) === result ? result : 0;
};


//数组转字符串转数组reverse法
var reverse2 = function(x) {
    let max = Math.pow(2, 31);
    if (x >= max || x < -max) {
        return 0
    }
    let num = Math.abs(x)
    let result = parseInt(num.toString().split('').reverse().join(''))
    if (x < 0) {
        return result <= max ? -result : 0
    } else {
        return result < max ? result : 0
    }
};

console.log(reverse2(231213))


//取余法
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let max = Math.pow(2, 31);

    let ordNum = Math.abs(x); //去符号
    let newNum = 0;
    while (ordNum > 0) {
        newNum = newNum * 10 + ordNum % 10;
        ordNum = Math.floor(ordNum / 10);
    }
    if (x < 0) {
        return result <= max ? -result : 0
    } else {
        return result < max ? result : 0
    }
};