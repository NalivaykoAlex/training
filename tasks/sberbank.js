const Some = ({ onClick }) => {
    return <button onClick={onClick}>Добавить в корзину</button>
};
// использовать нужно было React.Memo для этого компонента

// сделать оптимизацию для Some компонента
const SomeParent = ({ id, name, some }) => {
    const doSome = useSome();

    const someClickHandler = React.useCallback(() => {
        doSome(id, name, some);
    }, [doSome, id, name, some]);

    return <Some onClick={someClickHandler} />
};
//
// ///
//
//
//
//
//
// // до скролить до нужного элемента
//
// const SomePage = () => {
//     const itemList = useSelector();
//     const currentIndex = useSelector(); // 90 // SomeListItem-90
//     const someListRef = React.CreateRef()
//     const elementToScroll = (index) => {
//         if (!someListRef.current) return
//
//         const nodes = someListRef.current.childrens;
//         const element = nodes.querySelector(`SomeListItem-${index}`)
//
//         if (element) {
//             window.scrollTo(0, element)
//         }
//     }
//
//     useEffect(() => {
//         elementToScroll(currentIndex)
//     }, [currentIndex])
//
//     return (
//         <SomeList ref={someListRef}>
//             {itemList.map((item, index) => <SomeListItem {...item} id={`SomeListItem-${index}`} />}
//         </SomeList>
//     );
// };
//
// ///


// Нативно написать flat

// Array.prototype.myflat = function () {
//     const result = []
//
//     for (let i = 0; i < this.length; i++){
//         const currentElement = this[i] // 1 [2], [3,[4],5] / 3 элемента
//
//         if (!Array.isArray(currentElement)) {
//             result.push(currentElement)
//         } else {
//             this.myFlat(currentElement)
//         }
//
//     }
//
//     return result
// }
//
// console.log(this.myflat([1 [2], [3,[4],5]]), 111111)

const Steamroller = (arr) => {
    if (arr instanceof Array) {
        return arr.length === 0
            ? []
            : [...Steamroller(arr[0]), ...Steamroller(arr.slice(1))];
    }
    return [arr];
}

// const flatten = array =>
//     array.reduce(
//         (flattened, elem) =>
//             flattened.concat(Array.isArray(elem) ? flatten(elem) : elem),
//         []
//     );
//

// console.log(myFlat([1, [2], [3,[4],5]]), 'flat')
// console.log(flatten([1, [2], [3,[4],5]]), 'flat')
console.log(Steamroller([1, [2], [3,[4],5]]), 'flat')
