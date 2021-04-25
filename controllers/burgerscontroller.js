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

/* router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured],
        function(result) {
            res.json({ id: result.insertId });
        });
}); */

//doesnt work
/* router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
}); */

router.put('/update/:id', function(req, res) {
    burger.updateOne([req.body.devoured], [req.params.id], function() {
        res.redirect('/');
    });
});

/* router.delete("/delete/:id", function(req, res) 
{
    var condition = "id = " + req.params.id;
    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
}); */

/* router.delete('/delete/:id', function(req, res) {
    burger.deleteOne([req.params.id], function() {
        res.redirect('/');
    });
}); */

/* router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
}); */

router.delete('/delete/:id', function(req, res) {
    burger.deleteOne([req.params.id], function() {
        res.redirect('/');
    });
});
module.exports = router;