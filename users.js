var express = require('express');
var router = express.Router();
var data = [];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(data);
});
router.post('/:name', function(req, res, next){
  data.push({"name": req.params.name});
  res.send('post done')
});
router.delete('/:name', function(req, res, next){
  var index = data.findIndex(function(e){return e.name === req.params.name});
  data.splice(index, 1);
  res.send('delete done')
});

module.exports = router;
