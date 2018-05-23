import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import App from './App'
import router from './router'

Vue.config.productionTip = true

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
