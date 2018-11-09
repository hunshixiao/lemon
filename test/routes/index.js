var express = require('express');
var router = express.Router();
var addclass=require('./class/index.js');
console.log(addclass)
/* 添加分类 */
router.post('/api/addClass',addclass.addClass);

module.exports = router;
