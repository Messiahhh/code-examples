function Animal(name) {
    this.name = name
    this.sleep = function () {
        console.log(this.name + "正在睡觉")
    }
}

Animal.prototype.eat = function (food) {
    console.log(this.name + "正在吃" + food)
}


//原型链继承
// cat >= Cat.prototype >= Animal.prototype >= Object.prototype
// 1.不能多继承。2.所有新实例会共享父类的属性
function Cat() {

}

Cat.prototype = new Animal()
Cat.prototype.name = "cat"

var cat = new Cat()

//构造继承
//1.可以多继承。2.只能继承父类的实例属性和方法，不能继承原型属性和方法
function Cat() {
    Animal.call(this)
}

var cat = new Cat()

//组合继承
//可以继承实例属性和方法，也可以继承原型属性和方法
//缺点，调用两次父类构造函数
function Cat (name) {
    Animal.call(this)
    this.name = name
}

Cat.prototype = new Animal()
Cat.prototype.constructor = Cat

var cat = new Cat()


//ES6
class Animal {
    constructor(name) {
        this.name = name
    }
    eat(food) {
        console.log(this.name + "在吃" + food);
    }

}


class Cat extends Animal {
    constructor(name, color) {
        super(name)
        this.color = color
    }
    
    sleep() {
        console.log(this.name + "正在睡觉")
    }

}
