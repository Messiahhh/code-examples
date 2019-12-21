vue生命周期
-----------

Vue.component注册组件

new Vue()

```
let vm = new Vue()
```

### beforeCreate

此时vm中 ①。vm的data和methods都没有值 ②。vm的el没有值

### created

①。vm的data和methods获取到值 ②。vm的el没有值

查看是否有
