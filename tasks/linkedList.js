// === Сформировать структуру данных linked list

// пример

// const list = {
//     value: 1,
//     next : {
//         value: 2,
//         next : {
//             value: 3,
//             next : {
//                 value: 4,
//                 next : null
//             }
//         }
//     }
// };

addLinkList0 = list => {
    let tmp   = null;
    let count = list.length - 1;

    while (count >= 0) {
        tmp = { value: list[count], next: tmp };

        count--;
    }

    console.log(tmp);
};

addLinkList1 = array => {
    const reverse = array.reverse();
    console.log(
        reverse.reduce((prev, cur) => ({ value: cur, next: prev }), null)
    );
};

addLinkList2 = array => {
    console.log(
        array.reduceRight((prev, cur) => ({ value: cur, next: prev }), null)
    );
};

addLinkList0([1, 2, 3, 4]);
addLinkList1([1, 2, 3, 4]);
addLinkList2([1, 2, 3, 4]);
