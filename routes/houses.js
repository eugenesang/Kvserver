const { urlencoded } = require('express');
const express=require('express');
const House=require("../models/houses")
const router=express.Router();
router.use(urlencoded({extended:true}));
router.use(express.json());
//let {getHouses, postHouse}=require("../controllers/houses");
router.post('', (req, res)=>{
    let house=new House(req.body);
    house.save()
    .then(h=>{
        res.json(h)
    })
    .catch(err=>{
        res.json({error:err});
    })
});
router.get('', (req, res)=>{
    House.find()
    .then(h=>{
        res.json(h)
    })
    .catch(err=>{
        res.json({error:err});
    })
});
module.exports=router;