var express = require('express');
var router = express.Router();
var userApi=require('./user/index.js');
/* 添加用户*/
router.post('/',userApi.addUser);

//注销用户

//修改用户信息
module.exports = router;
