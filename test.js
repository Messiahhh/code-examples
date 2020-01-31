
function getValue(url, key) {
    let qs = url.split("?")[1]
    let entries = qs.split("&")
    let obj = {}
    entries.forEach(item => {
        obj[item.split("=")[0]] = item.split("=")[1]
    })
    return obj[key]
}

getValue("http://mp.weixin.qq.com?a=1&b=2", "a")


function isValidDomain(url, allowPort = false) {
    let str = url.split('/')[2]
    let domain
    let hasPort = false
    if (str.includes(":")) {
        domain = str.split(":")[0]
        hasPort = true
    }
    else {
        domain = str
    }
    if (!allowPort && hasPort) {
        return false
    }
    else {
        let arr = domain.split(".")
        if (domain === "mp.weixin.qq.com") return true
        if (arr[arr.length - 2] === "xx" && arr[arr.length - 1] === "com") return true
    }
    return false
}
isValidDomain("http://mp.weixin.qq.com")


class _HardMan {
    constructor(name) {
        this.tasks = []

        setTimeout(async () => {
            for (let task of this.tasks) {
                await task()
            }
        })

        this.tasks.push(() =>
            new Promise(resolve => {
                console.log(`I am ${name}`)
                resolve()
            })
        )
    }

    wait(sec) {
        return new Promise(resolve => {
            console.log(`//等待${sec}秒..`)
            setTimeout(() => {
                console.log(`Start learning after ${sec} seconds`)
                resolve()
            }, sec * 1000);
        })
    }


    rest(sec) {
        this.tasks.push(() => this.wait(sec))
        return this
    }

    restFirst(sec) {
        this.tasks.unshift(() => this.wait(sec))
        return this
    }

    learn(params) {
        this.tasks.push(() =>
            new Promise(resolve => {
                console.log(`Learning ${params}`)
                resolve()
            })
        )
        return this
    }
}

function HardMan(name) {
    return new _HarnMan(name)
}

function getDegree(hour, min) {
    let angHour, angMin, ang
    angHour = hour * 30 + min / 2
    angMin = min * 6
    deg = Math.abs(angHour - angMin)
    if (deg > 180) {
        deg = Math.abs(360 - deg)
    }
    return deg
}

//Reduce 实现 map
Array.prototype._map = function (fn) {
    let result = []
    this.reduce((total, current, index) => {
        result.push(fn(current))
    }, [])
    return result
}
var a = [1, 2, 3, 5]
a._map((item) => {
	return 2 * item
})


function Promise(executor) {
    let self = this
    this.status = 'pending'
    this.data = undefined
    this.onResolvedCallback = []
    this.onRejectedCallback = []
    let resolve = (value) => {
        setTimeout(() => {
            if (this.status === 'pending') {
                console.log(1111);

                this.status = 'fulfilled'
                this.data = value
                for (let i = 0; i < this.onResolvedCallback.length; i++) {
                    this.onResolvedCallback[i](value)
                }
            }
        }, 0)
    }
    let reject = (value) => {
        setTimeout(() => {
            if (this.status === 'pending') {
                this.status = 'fulfilled'
                this.data = value
                for (let i = 0; i < this.onRejectedCallback.length; i++) {
                    this.onRejectedCallback[i](value)
                }
            }
        })
    }
    try {
       executor(resolve, reject)
    } catch (e){
       reject(e)
    }

}

Promise.prototype.then = function (onResolve, onReject) {
    this.onResolvedCallback.push(onResolve)
    this.onRejectedCallback.push(onReject)
    return new Promise()
}


var p = new Promise((resolve) => {
	resolve(1)
	console.log("aaa")
})
p.then(() => {
	console.log("bbb")
})



function twoSum(arr, target) {
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
        let diff = target - value
        if (map.has(diff)) {
            return [diff, value]
        } else {
            map.set(value, i)
        }
    }
}
