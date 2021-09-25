const express=require("express");
const router=express.Router();
//let {getNews, postNews}=require("../controllers/news")
const Story=require("../models/news")
const { urlencoded } = require('express');
router.use(express.json())
router.use(urlencoded({ extended: false}))
router.post('', (req, res)=>{ 
    console.log(req.body);
    let story=new Story(req.body);
    story.save()
    .then(d=>{
        res.json(d);
    })
    .catch(err=>{
        res.json({error:err});
    })
});
router.get('', (req, res)=>{ 
    Story.find()
    .then(d=>{
        res.json(d);
    })
    .catch(err=>{
        res.json({error:err});
    })
});
module.exports=router;