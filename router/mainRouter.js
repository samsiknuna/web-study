const express = require('express');
const router = express.Router();

router.get("/", function(req,res){
    //res.send("hello world!");
    res.render('index.ejs', {title:"테스트"});
});

router.get("/about", function(req,res){
    res.send("hello world!2222222");
});

router.post("/a11", function(req,res){
    let body = req.body;
    console.log(body);
    res.send("hello world!3333");
});

router.get("/apitest", function(req,res){
    res.send({"key":"value"});
});


module.exports = router;