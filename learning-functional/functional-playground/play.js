import { forEach } from '../lib/es6-functional'
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
times(100, number => {
    unless((number % 2), () => console.log(number, ' is even from times func'))
})

//监测给定的数字是否为NaN
import { every } from '../lib/es6-functional'
let everyResult = every([NaN, NaN, NaN], isNaN)
console.log(everyResult)

// 真实的高阶函数
import { tag } from '../lib/es6-functional'
tag('fun')(it => console.log('value is', it))

// unary
import { unary } from '../lib/es6-functional'
const unaryResult = [1, 2, 3].map(unary(parseInt))
console.log(unaryResult)

// once 函数
import {once} from '../lib/es6-functional'
const onceTest = once(() => {
    console.log('执行中。。。')
    return '执行完毕'
})
console.log(onceTest())
console.log(onceTest())
console.log(onceTest())

// map
import {arrayUtil} from '../lib/es6-functional'
const map = arrayUtil.map
const mapResult = map([1,2,3], (value) => {
    return value * value
})
console.log(mapResult)

let apressBooks = [
    {
        id: 1,
        title: 'javascript',
        rating: [4.7],
        author: 'lee'
    },
    {
        id: 2,
        title: 'python',
        rating: [4.5],
        author: 'su'
    },
]

const apressBooksMapTest = map(apressBooks, book => ({
    title: book.title,
    author: book.author
}))
console.log(apressBooksMapTest)

// filter
const filter = arrayUtil.filter
const apressBooksFilterTest = filter(apressBooks, book => book.rating[0] > 4.5)
console.log(apressBooksFilterTest)
