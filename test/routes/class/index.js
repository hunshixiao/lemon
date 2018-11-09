var query=require('../../mysql/index.js');
var sql=require('../../mysql/sql.js');
var uuid=require('node-uuid');
//添加分类
function addClass(req,res,next){
  var params=req.body;
  var cName=params.cName,
      cIcon=params.cIcon,
      cType=params.cType,
      uid=params.uid;
      if(!cName || !cIcon || !cType || !uid){
        res.json({code:4,msg:'丢失参数'})
      }else{
        classify();
      }

//查询分类是否存在
function classify(){
    query(sql.CLASSIFY_ISHAS,[uid,cName],function(error,result){
        if(error){
            res.json({code:2,msg:'服务器错误'})
        }else{
            console.log(result)
            if(result.length>0){
                res.json({code:3,msg:'此分类已存在'})
            }else{
                add();
            }
        }
    })
}
//添加分类
function add(){
    var cid=uuid.v1();
    query(sql.ADD_CLASSIFY,[cid,cName,cIcon,cType,uid],function(error,result){
        if(error){
            res.json({code:0,msg:'服务器错误'})
        }else{
            res.json({code:1,msg:'添加成功',cid:cid})
        }
    })
}


}

module.exports={
   addClass:addClass
}