// 遍历数组
const forEach = (array, fn) => {
    let i
    for (i = 0; i < array.length; i++) {
        fn(array[i])
    }
}

export default forEach

// 遍历对象
const forEachObject = (obj, fn) => {
    let property
    for (property in obj) {
        if (obj.hasOwnProperty(property)) {
            fn(property, obj[property])
        }
    }
}

export {
    forEachObject
}

// 从一个数组中取出偶数
const unless = (precidate, fn) => {
    if (!precidate)
        fn()
}
export {
    unless
}

// 从0-100取出偶数
const times = (times, fn) => {
    let i
    for (i = 0; i < times; i++)
        fn(i)
}
export {
    times
}

// every函数
const every = (arr, fn) => {
    let result = true
    for (const value of arr) {
        result = result && fn(arr[i])
    }
    return result
}
export {
    every
}