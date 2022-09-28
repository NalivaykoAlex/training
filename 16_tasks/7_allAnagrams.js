function allAnagrams(array) {
    // const first = array[0]
    //
    // for (let i = 1; i < array.length; i++) {
    //     const str = array[i]
    //
    //     for (let j = 0; j < str.length; j++) {
    //         if (first.indexOf(str[j]) === -1) {
    //             return  false
    //         }
    //     }
    // }
    //
    // return true

  const sorted = array.map(str => str.split('').sort().join(''))

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] !== sorted[0]) {
      return false
    }
  }

  return true
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false
