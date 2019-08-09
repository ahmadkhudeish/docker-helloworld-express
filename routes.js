var express = require("express");
var router = express.Router();
var HelloWorldController = require("./controllers/HelloWorldController");

var helloWorldController = new HelloWorldController();

router.get("/hello", (req, res) => {
    helloWorldController.getHelloWorld(req, res);
});

module.exports = router;
