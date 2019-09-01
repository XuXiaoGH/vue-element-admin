var express = require('express');
var router = express.Router();

/* GET users listing. */
global.rsiData = {};
router.get('/add', function(req, res, next) {

  let value = req.query.value;
  let type = req.query.type;
  let currDate = req.query.currDate;

  global.rsiData[type] = {
    rsiValue: value,
    currDate: currDate
  }; 
  res.json({
          success:true,
          code:0,
          msg:"rsi--" + type + "-- "+ value +" 数值插入成功"
        });
});


router.get('/get', function(req, res, next) {
  let type = req.query.type
  res.json({
          data:{
            rsiValue: global.rsiData[type]
          },
          success:true,
          msg:"rsi数值获取成功"
        });
});


router.get('/getAll', function(req, res, next) {
  res.json({
          data:{
            rsiValue: global.rsiData
          },
          success:true,
          msg:"rsi数值获取成功"
        });
});

module.exports = router;
