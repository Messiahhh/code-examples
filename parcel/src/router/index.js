import VueRouter from 'vue-router'
import one from '../components/one'
import two from '../components/two'

const routes = [
    {
        path: '/',
        component: one
    },
    {
        path: '/two',
        component: two
    }
]

const router = new VueRouter({
    routes
})

export default router
