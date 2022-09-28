/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) { //
    if (!needle) {
        return 0
    }

    for (let i = 0; i < haystack.length; i++) {
        const currentValue = haystack[i]

        if (currentValue === needle[0] && haystack.substring(i, i + needle.length) === needle) {
            return i
        }
    }

    return -1
};

var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0;

  if (needle === haystack) return 0;

  /*
    Затем мы перебираем стог сена, но обращаем внимание на условие в цикле for.
    Мы зацикливаемся только до haystack.length - needle.length, потому что, как обсуждалось выше, это последний индекс, где вы можете иметь иглу.
    В теле мы проверяем равенство подстрок иглы и стога сена.
   */
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (needle === haystack.substring(i, i + needle.length)) {
      return i;
    }
  }

  return -1;
};


/*
Time complexity - O(n*m)
Мы используем простой цикл for для обхода стога сена,
однако мы также используем метод подстроки внутри цикла с линейной сложностью,
поэтому сложность становится O(n*m) . где n — длина стога сена, а m — длина иголки.

Space complexity - O(1)
*/

console.log(strStr("hello",  "ll"), 2)
console.log(strStr("hello",  "el"), 2)
console.log(strStr("aaaaa", "bba"), -1)
console.log(strStr("", ""), 0)
