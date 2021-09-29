// 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

// 二分法 因为是有序递增且只缺失一个，可以对比下标
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let m = Math.floor((left + right) / 2);
    if (nums[m] === m) left = m + 1;
    else right = m - 1;
  }
  return left;
};
