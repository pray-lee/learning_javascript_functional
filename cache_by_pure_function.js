// 通过纯函数缓存结果
// 缓存对象
const longRunningFnBookKeeper = {}
// 调用原始函数之前先检查一下，如果没有，调用原始函数，如果有，返回
const check = ip => {
    return longRunningFnBookKeeper.hasOwnProperty(ip) ? 
        longRunningFnBookKeeper[ip] :
        longRunningFnBookKeeper[ip] = longRunningFunction(ip)
}
// 原始函数 (纯函数)
const longRunningFunction = ip => {
    return longRunningFnBookKeeper[ip] = 'pure function'
}
check('a')
check('b')
check('c')
console.log(longRunningFnBookKeeper) // a b c has been saved
