const fs = require('fs').promises
async function A() {
    let data = await fs.readFile('./app.js')
    console.log(data.toString('utf-8'));
}
A()


async function B() {
    let data = await fs.writeFile('./test.html', 'hello world')
    console.log(data);
}
B()
