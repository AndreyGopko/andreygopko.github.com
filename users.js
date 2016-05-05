//data
'use strict';
let counter = 0;
function autoInc(){
  return counter++;
}
class Users {
  constructor() {
    this.data = [];
  }
  get() {
    return this.data;
  }
  add() {
    let temp = {};
    temp.id = autoInc();
    this.data.push([temp]);
    return [temp];
  }
  delete(index) {
    return this.data.splice(index, 1);
  }
}

module.exports = new Users();

//users
var express = require('express');
var router = express.Router();
var data = require('./data.js')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(data.get());
});
router.post('/', function(req, res, next){
  res.send(data.add());
});
router.delete('/:index', function(req, res, next){
  res.send(data.delete(req.params.index));
});

module.exports = router;
