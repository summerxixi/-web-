/**
 * @Description
 * @author  TingFang
 * @date  2022/10/5 21:04
 */
const Router = require('koa-router')
const helper = require('../dbhelper/messageDbhelper')

const router = new Router()

router.prefix('/message')
// 查询所有会话
router.post('/getAllById', async (ctx, next) => {
  let data = await helper.findAllById(ctx.request.body)
  ctx.body = {
    list: data,
    message: '查询成功',
    status: '10000'
  }
  await next()
})

// 添加会话
router.post('/addMessage', async (ctx, next) => {
  let data = await helper.addMessage(ctx.request.body)
  ctx.body = {
    list: data,
    message: '添加成功',
    status: '10000'
  }
  await next()
})

module.exports = router
