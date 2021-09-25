const express=require("express");
const router=express.Router();
router.use(express.urlencoded({extended:true}));
router.use(express.json());
//let {getPosts, postPost}=require('../controllers/posts');
const Post=require("../models/posts")
router.post('', (req, res)=>{
    console.log(req.body);
    let post=new Post(req.body);
    post.save()
    .then(e=>{
        res.json(e)
    })
    .catch(err=>{
        res.json({error:err})
    })
});
router.get('', (req, res )=>{
    Post.find()
    .then(d=>{
        res.json(d)
    })
    .catch(err=>res.json({error:err}));
});
module.exports=router;