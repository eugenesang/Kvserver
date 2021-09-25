const {Router, urlencoded}=require("express");
const express=require("express");
const router=Router();
router.use(urlencoded({extended : true}));
router.use(express.json());
const User=require("../models/user");
router.post('',(req, res)=>{
    let success=false;
  User.find()
  .then(users=>{
   for (user of users){
    if(user.email==req.body.emai){
        if(user.password==req.body.password){
            res.json(user);
            
        }else{
            throw error("wrong password")
        }
        success=true;
        break;
    }
   };
   if(!success){
    throw error("unable to find your email please consider registering");
};
  })
  .catch(err=>res.json({error: err}))
});

module.exports=router;