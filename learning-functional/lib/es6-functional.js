// 遍历数组
const forEach = (array, fn) => {
    let i
    for (i = 0; i < array.length; i++) {
        fn(array[i])
    }
}

export {
    forEach
}

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
const unless = (condition, fn) => {
    if (!condition)
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
        console.log('------')
        console.log(value)
        result = result && fn(value)
    }
    return result
}
export {
    every
}

// tag
const tag = value => (fn => (
    typeof fn === 'function' && fn(value),
        console.log(value)
))
export {
    tag
}

// unary  接受一个给定的多参数函数，并且把他转换成只接收一个参数的函数
const unary = fn =>
    fn.length === 1 ?
        fn :
        arg => fn(arg)
export {
    unary
}

//once 让函数只执行一次
const once = fn => {
    let done = false
    return () => {
        console.log('done', done)
        return done ? undefined : ( done = true, fn.apply(this, arguments) )
    }
}
export {
    once
}