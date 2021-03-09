//双指针法

var merge = function(nums1, m, nums2, n) {
    let pointer1 = m - 1;
    let pointer2 = n - 1;
    let length = m + n - 1
    while (pointer1 >= 0 && pointer2 >= 0) {
        if (nums2[pointer2] < nums1[pointer1]) {
            nums1[length] = nums1[pointer1];
            pointer1--;
            length--;
        } else {
            nums1[length] = nums2[pointer2];
            pointer2--;
            length--;
        }
    }
    if (pointer2 >= 0) {
        nums1.splice(pointer1 + 1, pointer2 + 1, ...nums2.slice(0, pointer2 + 1))
    }
    return nums1
};
let a1 = [4, 5, 6, 7, 9, 14]

let a2 = [1, 2, 4, 7, 11, 16, 17, 20]


console.log(merge(a1, 6, a2, 8))