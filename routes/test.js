var express = require("express");
var router = express.Router();
var snappy = require("snappy");

/* GET users listing. */
router.post("/", function(req, res, next) {
  console.log(JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

module.exports = router;
