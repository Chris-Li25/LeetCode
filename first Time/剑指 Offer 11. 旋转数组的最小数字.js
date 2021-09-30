// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

// 二分查找法
/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function (numbers) {
    if (numbers.length == 0) return 0
    let i = 0, j = numbers.length - 1
    let m = 0
    while (i <= j) {
        m = Math.floor((i + j) / 2)
        if (numbers[m] < numbers[j]) {
            j = m
        } else if (numbers[m] > numbers[j]) {
            i = m + 1
        } else {
            j -= 1
        }
    }
    return numbers[m]
};