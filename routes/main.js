const express = require("express");
const router = express.Router();



router.get("/", (req, res)=>{
    res.render("index");
});

router.get("/about-us", (req, res)=>{
    res.render("about");
});

router.get("/meet-team", (req, res)=>{
    res.render("team");
});

router.get("/contact", (req, res)=>{
    res.render("contact");
});

router.get("/register", (req, res)=>{
    res.render("register");
});

router.get("/login", (req, res)=>{
    res.render("login");
});









module.exports = router;