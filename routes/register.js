const express= require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const User=require("../models/user");
router.post('',(req,res)=>{
    let user=new User(req.body);
    user.save()
    .then(d=>res.json(d))
    .catch(err=>err)
});
module.exports=router;