class GetMinValue {
    arr = [];

    push = (value) => {
        const lastElement = this.arr[this.arr.length - 1]

        if (!lastElement) {
            this.arr.push(value)

            return
        }

        this.arr.push(lastElement < value ? lastElement : value)
    }

    get = () => {
        return this.arr.pop()
    }

    log = () => {
        console.log(this.arr)
    }
}

const getMinValue = new GetMinValue()

getMinValue.push(1)
getMinValue.log()
getMinValue.push(2)
getMinValue.log()
getMinValue.push(3)
getMinValue.log()
getMinValue.push(0)
getMinValue.log()

console.log(getMinValue.get())
getMinValue.log()
console.log(getMinValue.get())
getMinValue.log()
console.log(getMinValue.get())
getMinValue.log()
console.log(getMinValue.get())
getMinValue.log()
console.log(getMinValue.get())
getMinValue.log()
console.log(getMinValue.get())
