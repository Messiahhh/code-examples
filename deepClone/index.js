// 深克隆
// 1.判断属性是对象还是函数
// 2.数组或是对象
// 3.判断是否为对象的isObject
// 4.WeakMap 实现 循环引用的检测

function deepClone(source, hash = new WeakMap()) {
    let target
    if (hash.has(source)) {
        return hash.get(source)
    }
    if (typeof source === 'object') {
        target = Array.isArray(source) ? [] : {}
        hash.set(source, target)
        for (let key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = isObject(source[key]) ? deepClone(source[key], hash) : source[key]
            }
        }
    }
    else {
        target = source
    }
    return target
}

function isObject(obj) {
    return (typeof obj === "object" || typeof obj === "function") && obj !== null
}
var obj = {}
obj.a = obj

deepClone(obj)
