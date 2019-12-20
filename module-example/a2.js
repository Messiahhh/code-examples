console.log(module);
console.log(exports);
console.log(module.exports === exports);

module.exports = function A() {
    console.log(123);
}
