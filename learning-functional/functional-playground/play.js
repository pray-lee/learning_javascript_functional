import forEach from '../lib/es6-functional'
const array = [1, 2, 3]
forEach(array, data => console.log(data))

// 遍历对象
import { forEachObject } from '../lib/es6-functional'
const obj = {a: 1, b: 2}
forEachObject(obj, (key, value) => console.log(key, value))

// 从一个数组中取出偶数
import { unless } from '../lib/es6-functional'
forEach([1,2,3,4,5,6], number => {
    unless((number % 2), () => console.log(number, ' is even from unless func'))
})

// 从0-100取出偶数
import { times } from '../lib/es6-functional'
times(10, number => {
    unless((number % 2), () => console.log(number, ' is even from times func'))
})

//监测给定的数字是否为NaN
import { every } from '../lib/es6-functional'
let everyResult = every([NaN, NaN, NaN], isNaN)
console.log(everyResult)