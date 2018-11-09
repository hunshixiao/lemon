module.exports={
    //添加用户
    ADD_USER:'insert into user (uid,nick_name) values (?,?)',
    //查询此昵称是否存在
    USER_ISHAS:'select * from user where nick_name=?',
    //添加分类
    ADD_CLASSIFY:'insert into class (cid,c_name,c_icon,c_type,uid) values (?,?,?,?,?)',
    //查询此分类是否存在
    CLASSIFY_ISHAS:'select * from class where (uid=? or uid="*") and c_name=?'
}