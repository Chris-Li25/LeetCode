//维护数组法 滑动窗口

var lengthOfLongestSubstring = function(s) {
    let arr = [],
        max = 0
    for (let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s[i])
        if (index !== -1) {
            arr.splice(0, index + 1);
        }
        arr.push(s.charAt(i))
        max = Math.max(arr.length, max)
    }
    return max
};


//map法

var lengthOfLongestSubstring = function(s) {
    let map = new Map(),
        max = 0
    for (let i = 0, j = 0; j < s.length; j++) {
        if (map.has(s[j])) {
            i = Math.max(map.get(s[j]) + 1, i)
        }
        max = Math.max(max, j - i + 1)
        map.set(s[j], j)
    }
    return max
};