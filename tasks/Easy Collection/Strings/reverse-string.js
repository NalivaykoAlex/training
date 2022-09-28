/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if (s.length <= 1) {
        return s
    }

    let start = 0
    let end = s.length - 1

    while(start < end) {
        [s[start], s[end]] = [s[end], s[start]]

        start++
        end--
    }

    return s;
};

/*
    ["h","e","l","l","o"]
                      ^
     ^
*/

console.log(reverseString(["h","e","l","l","o"]), ["o","l","l","e","h"])
// console.log(["H","a","n","n","a","h"], ["h","a","n","n","a","H"])