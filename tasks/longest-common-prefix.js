/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';

    for (let i = 0; i <= strs[0].length; i++) { // берем первое слово и делаем по нему цикл и все элементы слова <=
        for (let j = 1; j < strs.length; j++) { // начинаем со след элемента, так как первый не нужен
            if (strs[0][i] !== strs[j][i]) { // сравниваем по символьно все символы с первым словом
                return strs[0].slice(0, i); // если они не равны, то берем первое слово и отрезаем его до индекса, на котором произошло не совпадение
            }
        }
    }

    return strs[0];
};

console.log(longestCommonPrefix(["flower","flow","flight"]), 'fl')
console.log(longestCommonPrefix(["dog","racecar","car"]), '')