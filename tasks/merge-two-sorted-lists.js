function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
    if (!list1.length && !list2.length) {
        return []
    }

    if (!list1.length) {
        return list2
    }

    if (!list2.length) {
        return list1
    }

    let startIndexA = 0
    let startIndexB = 0
    const sumLength = list1.length + list2.length
    const result = []

    while(sumLength !== result.length && list1[startIndexA] && list2[startIndexB]) {
        const elementA = list1[startIndexA]
        const elementB = list2[startIndexB]

        if (elementA === elementB) {
            result.push(elementA)
            result.push(elementB)

            startIndexB++
            startIndexA++
        }

        if (elementA < elementB) {
            result.push(elementA)

            startIndexA++
        }

        if (elementA > elementB) {
            result.push(elementB)

            startIndexB++
        }
    }

    return result;
};


console.log(mergeTwoLists([1,2,4],  [1,3,4]), [1,1,2,3,4,4])
console.log(mergeTwoLists([],  []), [])
console.log(mergeTwoLists([],  [0]), [0])