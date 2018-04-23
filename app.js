const path = require('path')
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))
const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static')
const logger = require('koa-logger')
const Router = require('koa-router')
const router = new Router()
const koaBody = require('koa-body')
const send = require('koa-send')
app.use(logger())

app.use(serve(path.join(__dirname, '.')))
app.use(koaBody({multipart: true}))

// router
//     .get('/', async (ctx, next) => {
//         await send(ctx, './houdini/paint/index.html')
//     })


app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)
