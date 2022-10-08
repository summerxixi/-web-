/**
 * @Description
 * @author  TingFang
 * @date  2022/10/5 14:53
 */
const mysqldb = require('../utils/mysql')
const mesHelper = require('../dbhelper/messageDbhelper')
const helper = {
  //查询所有的联系人
  findAll: (params) => {
    return new Promise(async (resolve, reject) => {
      let friends = await mysqldb.select('friends').from('user').where("id",params.id).queryRow()
      friends = friends["friends"].split(",")
      friends =friends.map(item => {
        //id = value or id = value2
        return {field: 'id', value: item, operator: 'eq',join: 'or'}
      })
      //获取自己和联系人
      let myData = await mysqldb.select('*').from('user').where("id",params.id).queryList()
      let userList = await mysqldb.select('*').from('user').where(friends).queryList()
      //进行拼接
      userList = [...myData,...userList]

      //查看给自己发信息的情况
      for (let i = 0; i < userList.length; i++) {
        let data = {id: params.id, otherId: userList[i].id}
        let res = await mesHelper.findNumAndTail(data)
        userList[i] = {...userList[i], ...res}
      }
      
      resolve(userList)
    })
  },
  login: (params)=>{
    return new Promise(async (resolve, reject) => {
      let {name, password} = params
      let res = await mysqldb.select("*").from("user").where("name",name).where("password",password).queryList()
      resolve(res)
    })
  },
  
  register:(params)=>{
    return new Promise(async (resolve, reject) => {
      let {name, password} = params
      mysqldb.insert('user', {name,password,image:"https://img0.baidu.com/it/u=1477884132,138131308&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",friends:'',receive:''}).execute()
      resolve()
    })
  },
  
  receiveFriends:(params)=>{
    return new Promise(async (resolve, reject) => {
      let {list} = params
      list =list.map(item => {
        return {field: 'id', value: item, operator: 'eq',join: 'or'}
      })
      // select * from user where (id = '3' or id ='4')
      let userList = await mysqldb.select('*').from('user').where(list).queryList()
      resolve(userList)
    })
  },

  successFriends:(params)=>{
    return new Promise(async (resolve, reject) => {
      let {id,otherId} = params
      //修改我自己的列表
      let myUser = await mysqldb.select('*').from('user').where("id",id).queryList()
      await helper.friendAndReceive(myUser,id,otherId)

      //修改别人的列表
      let otherUser = await mysqldb.select('*').from('user').where("id",otherId).queryList()
      await helper.friendAndReceive(otherUser,otherId,id)
      
      resolve()
    })
  },
  /*拼接朋友字符串和待接收字符串*/
  friendAndReceive:async (list ,id, otherId)=>{
    if(list[0].friends){
      list[0].friends += `,${otherId}`
    }else{
      list[0].friends = `${otherId}`
    }
    
  
    if (list[0].receive){
      let receiveList =  list[0].receive.split(",") // [2,3,4]
      receiveList = receiveList.filter((item) => item != otherId) // [2,4]
      list[0].receive = receiveList.join(",") // 2,4
    }


    //修改朋友状态
    await mysqldb.update("user")
      .column("friends", list[0].friends)
      .column("receive", list[0].receive)
      .where('id', id)
      .execute();
  },

  findFriends:(params)=>{
    return new Promise(async (resolve, reject) => {
      let {id} = params
      //修改我自己的列表
      let myUser = await mysqldb.select('*').from('user').where("id",id).queryList()
      let allUser = await  mysqldb.select('*').from('user').queryList()
      let havFriends = []
      if (myUser[0].friends) {
        havFriends = myUser[0].friends.split(",")
      }
      // [2,3]
      havFriends = new Set([id,...havFriends])
      //[1,2,3,4]
      let addFriends = allUser.filter(item => !havFriends.has(`${item.id}`))
      resolve(addFriends)
    })
  },
  
  addFriend:(params)=>{
    return new Promise(async (resolve, reject) => {
      let {id,otherId} = params
      //修改我自己的列表
      let other = await mysqldb.select('*').from('user').where("id",otherId).queryList()
      if (other[0].receive){
        let list = other[0].receive.split(",")
        list.push(id)
        other[0].receive = list.join(",")
      }else{
        other[0].receive = id
      }

      await mysqldb.update("user")
        .column("receive", other[0].receive)
        .where('id', otherId)
        .execute();
      resolve()
    })
  }

}
module.exports = helper
