var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();


router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.all(function(data) {
        var hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//works
router.post("/burgers/create", function(req, res) {
    burger.create("burger_name", req.body.burger_name, function() {
        res.redirect("/burgers");
    })
})

router.put("/burgers/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
        res.sendStatus(200);
    });
});

module.exports = router;