/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//二分法

var findMedianSortedArrays = function(nums1, nums2) {
    if (nums2.length < nums1.length) {
        [nums1, nums2] = [nums2, nums1]
    }
    const m = nums1.length
    const n = nums2.length
    let low = 0;
    let high = m;
    while (low <= high) {
        let i = low + Math.floor((high - low) / 2);
        let j = Math.floor((m + n + 1) / 2) - i

        let maxLeftA = i === 0 ? -Infinity : nums1[i - 1];
        let minRightA = i === m ? Infinity : nums1[i];
        let maxLeftB = j === 0 ? -Infinity : nums2[j - 1];
        let minRightB = j === n ? Infinity : nums2[j];


        if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
            console.log(maxLeftA, maxLeftB, minRightA, minRightB)

            return (m + n) % 2 == 1 ? Math.max(maxLeftA, maxLeftB) : (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;

        } else if (maxLeftA > minRightB) {
            high = i - 1;
        } else {
            low = i + 1;
        }
    }
};

let arr1 = [1, 2]
let arr2 = [3, 4]

console.log(findMedianSortedArrays(arr1, arr2))