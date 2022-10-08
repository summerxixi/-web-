/**
 * @Description
 * @author  TingFang
 * @date  2022/10/5 21:04
 */
const Router = require('koa-router')
const helper = require('../dbhelper/userDbhelper')

const router = new Router()

router.prefix('/user')
// 查询所有
router.post('/getAll', async (ctx, next) => {
  let data = await helper.findAll(ctx.request.body)
  ctx.body = {
    list: data,
    message: '查询成功',
    status: '10000'
  }
  await next()
})

router.post('/login', async (ctx, next) => {
  let message = ""
  let code = 200
  let data = await helper.login(ctx.request.body)
  if (data.length == 1){
    message = "登录成功"
  }else{
    code = 201
    message = "登录失败"
  }
  ctx.body = {
    code: code,
    list: data,
    message: message,
    status: '10000'
  }
  await next()
})
router.post('/register', async (ctx, next) => {
  let data = await helper.register(ctx.request.body)
  ctx.body = {
    list: data,
    message: '注册成功',
    status: '10000'
  }
  await next()
})

router.post('/receiveFriends', async (ctx, next) => {
  let data = await helper.receiveFriends(ctx.request.body)
  ctx.body = {
    list: data,
    message: '查询成功',
    status: '10000'
  }
  await next()
})

router.post('/successFriends', async (ctx, next) => {
  let data = await helper.successFriends(ctx.request.body)
  ctx.body = {
    list: data,
    message: '添加成功',
    status: '10000'
  }
  await next()
})


router.post('/findFriends', async (ctx, next) => {
  let data = await helper.findFriends(ctx.request.body)
  ctx.body = {
    list: data,
    message: '查询成功',
    status: '10000'
  }
  await next()
})

router.post('/addFriend', async (ctx, next) => {
  let data = await helper.addFriend(ctx.request.body)
  ctx.body = {
    list: data,
    message: '查询成功',
    status: '10000'
  }
  await next()
})



module.exports = router
