const express = require("express");

const router = express.Router();


router.get('/',( req,res) =>
    {
       res.render("index");
    });

router.get('/index',( req,res) =>
    {
       res.render("index");
    });

router.get('/about',( req,res) =>
    {
           res.render("about");
    }); 

router.get('/resume',( req,res) =>
    {
        res.render("resume");
    });

router.get('/services',( req,res) =>
    {
        res.render("services");
    });
    
router.get('/portfolio',( req,res) =>
    {
        res.render("portfolio");
    });

router.get('/contact',( req,res) =>
    {
        res.render("contact");
    });

router.get('/project_1',( req,res) =>
    {
        res.render("project_1");
    });
    

module.exports = router;
