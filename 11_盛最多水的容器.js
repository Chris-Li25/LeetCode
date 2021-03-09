//双指针法

var maxArea = function(height) {
    let pointer1 = 0
    let pointer2 = height.length - 1
    let maxArea, area = 0;
    while (pointer1 != pointer2) {
        area = (pointer2 - pointer1) * (height[pointer1] > height[pointer2] ? height[pointer2--] : height[pointer1++])
        maxArea = maxArea > area ? maxArea : area
    }
    return maxArea
};