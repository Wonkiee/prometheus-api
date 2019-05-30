var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.sendFile(
    "/home/rajithar/Documents/Promethius/API/promethius-api/public/html/index.html"
  );
});

module.exports = router;
