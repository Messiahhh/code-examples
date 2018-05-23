'use strict';


async function A() {
    var a = await new Promise(function (resolve, reject) {
        resolve('1');
    });
    console.log(a);
}
A();
