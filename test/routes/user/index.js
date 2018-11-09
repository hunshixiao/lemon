var sql=require('../../mysql/sql.js');
var query=require('../../mysql/index.js');
var uuid=require('node-uuid');
function addUser(req,res,next){
   var params=req.body;
   var nickName=params.nickName;
   var uid=params.uid;
  // console.log(params,nickName,uid)
  if(!nickName){
    res.json({code:2,msg:'用户名为空'})
  }else if(!uid){
    userISHas();
  }
  //检查昵称是否存在
  function userISHas(){
    query(sql.USER_ISHAS,[nickName],function(error,result){
      if(error){
         res.json({code:0,msg:'服务有错误'})
      }else{
         if(result.length>0){
           res.json({code:3,msg:'昵称已经使用'})
         }else{
            add();
         }
      }
    })
  }
   //添加
   function add(){
     var uid=uuid.v1();
     query(sql.ADD_USER,[uid,nickName],function(error,result){
         if(error){
            res.json({code:0,msg:'服务有错误'}) 
         }else{
            res.json({code:1,msg:'添加成功',uid:uid})
         }
     })
   }


}
module.exports={
  addUser:addUser
}