

class Promise {
    constructor(executor) {
        this.status = "pending"
        this.value = undefined
        this.onResolvedCallback = []
        this.onRejectedCallback = []

        const resolve = (value) => {
            if (value instanceof Promise) {
                value.then((data) => {
                    resolve(data)
                }, (reason) => {
                    reject(reason)
                })
            }
            else {
                if (this.status === "pending") {
                    this.status = "fulfilled"
                    this.value = value
                    this.onResolvedCallback.forEach(callback => {
                        callback()
                    })
                }
            }
        }

        const reject = (reason) => {
            if (this.status === "pending") {
                this.status = "rejected"
                this.value = reason
                this.onRejectedCallback.forEach(callback => {
                    callback()
                })
            }
        }

        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }

    }

    then(onResolve, onReject) {
        let promise = new Promise((resolve, reject) => {
            if (this.status === "pending") {
                this.onResolvedCallback.push(() => {
                    // setTimeout 模拟异步， 实际上then是放进微队列而setTimeout是放进宏队列
                    setTimeout(() => {
                        try {
                            resolve(onResolve(this.value))
                        } catch (e) {
                            reject(e)
                        }
                    })
                })
                this.onRejectedCallback.push(() => {
                    setTimeout(() => {
                        try {
                            resolve(onReject(this.reason))
                        } catch (e) {
                            reject(e)
                        }
                    })
                })
            }
            else if (this.status === "fulfilled") {
                setTimeout(() => {
                    try {
                        let x = onResolve(this.value)
                        resolvePromise(promise, x, resolve, reject)
                        // resolve(onResolve(this.value))
                    } catch (e) {
                        reject(e)
                    }
                })
            }
            else if (this.status === "rejected") {
                setTimeout(() => {
                    try {
                        resolve(onReject(this.reason))
                    } catch (e) {
                        reject(e)
                    }
                })
            }
        })
        return promise
    }

}

function resolvePromise(promise, x, resolve, reject) {
    if (x instanceof Promise) {
        x.then((data) => {
            resolvePromise(promise, data, resolve, reject)
        }, (reason) => {
            reject(x)
        })
    } else {
        resolve(x)
    }
}


// promises-aplus-tests
Promise.defer = Promise.deferred = function(){
    let dfd = {};
    dfd.promise = new Promise((resolve, reject)=>{
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}
module.exports = Promise;

// example
let promise1 = new Promise((resolve) => {
    resolve(1)
})

let promise2 = promise1.then((data) => {
    return new Promise((r) => {
        setTimeout(() => {
            r(1000)
        }, 400)
    })
})
