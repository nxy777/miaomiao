// 云函数入口文件
const cloud = require('wx-server-sdk')



cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
//获取db command库的函数
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  try {

    // 前台转化为字符串送到后台，然后后台解析字符串运算后传回前台
    if(typeof event.data == 'string'){
      // eval把字符串转化为json
      event.data = eval('('+event.data+')');
    }


    if(event.doc){
      return await db.collection(event.collection)
      .doc(event.doc)
      .update({
        data: {
          // 扩展运算符
          ...event.data
        },
      })
    }else {
      return await db.collection(event.collection)
      // 加好友的更新操作
      .where({...event.where})
      .update({
        data: {
          // 扩展运算符
          ...event.data
        },
      })
    }
  } catch(e) {
    console.error(e)
  }
}