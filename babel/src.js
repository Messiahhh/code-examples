import 'babel-polyfill'
async function A() {
    let a = await new Promise((resolve, reject) => {resolve('1')})
    console.log(a);
}
A()
