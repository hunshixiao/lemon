/*
 * @Author: yangtingting 
 * @Date: 2018-11-09 13:25:45 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-11-09 13:57:02
 */

var mysql=require('mysql');
var config={
    port:'3306',
    host:'localhost',
    user:'root',
    password:'root',
    database:'api',
    connectionLimit:100
}
var pool=mysql.createPool(config);
/**
 * @param {string} sql sql语句
 * @param {array} query sql需要的参数
 * @param {function} fn 回调函数
 */
module.exports=function(sql,query,fn){
    fn=fn?fn:query;
    query=query||[];
    pool.getConnection(function(err,con){
      if(err){
          fn(err)
      }
          con.query(sql,query,function(err,result){
                con.release(); 
            if(err){
                  fn(err)
              }else{
                  fn(null,result);
              }      
          })
    })
}