/**
 * @Description
 * @author  TingFang
 * @date  2022/4/21 14:53
 */
const mysqldb = require('../utils/mysql')
const helper = {
  //查询所有会话
  findAllById: (params) => {
    return new Promise(async (resolve, reject) => {
      //修改查看状态
      await mysqldb.update("message")
        .column("read", "0")
        .where('orginId', params.otherId)
        .where('toId', params.id)
        .execute();
      
      let selfUser =await mysqldb.select('*').from('message').where([
        {field: 'orginId', value: params.id, operator: 'eq'},
        {field: 'toId', value: params.otherId, operator: 'eq'},
      ]).queryList()
      
      let otherUser =await mysqldb.select('*').from('message').where([
        {field: 'orginId', value: params.otherId, operator: 'eq'},
        {field: 'toId', value: params.id, operator: 'eq'},
      ]).queryList()
      
      
      resolve([...selfUser,...otherUser])
    })
  },
  //查找有多少条会话 以及最后会话内容
  findNumAndTail:(params)=>{
    return new Promise(async (resolve, reject) => {
      //没有看的条数
      let num = await mysqldb.select("count(0)").from("message").where([
        {field: 'orginId', value: params.otherId, operator: 'eq'},
        {field: 'toId', value: params.id, operator: 'eq'},
        {field: 'read', value: '1', operator: 'eq'},
      ]).queryRow();
      
      let lastTailMyId = await mysqldb.select("max(id)").from("message").where([
        {field: 'orginId', value: params.id, operator: 'eq'},
        {field: 'toId', value: params.otherId, operator: 'eq'}
      ]).queryRow();

      let lastTailOtherId = await mysqldb.select("max(id)").from("message").where([
        {field: 'orginId', value: params.otherId, operator: 'eq'},
        {field: 'toId', value: params.id, operator: 'eq'}
      ]).queryRow();

      let lastId = lastTailMyId["max(id)"] > lastTailOtherId["max(id)"] ? lastTailMyId["max(id)"] : lastTailOtherId["max(id)"]
      let tailMessage = await mysqldb.select("text").from("message").where("id",lastId).queryRow()

      resolve({num: num["count(0)"], tailMessage: tailMessage?.["text"]})
    })
  },
  addMessage:(params) =>{
    return new Promise(async (resolve, reject) => {
      mysqldb.insert('message', params).execute()
      resolve()
    })
  }
}
module.exports = helper
