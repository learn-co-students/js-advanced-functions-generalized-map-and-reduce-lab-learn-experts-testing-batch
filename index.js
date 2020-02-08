// Add your functions here
const map = (array, cb) => {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(cb(array[i]))
    }
    return newArray
}

const reduce = (array, cb, start) => {
    let st = !!start ? start : array[0]
    let i = !!start ? 0 : 1
    for(; i < array.length; i++) {
        st = cb(array[i], st)
    }
    return st
}