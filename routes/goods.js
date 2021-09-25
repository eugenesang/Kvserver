const express=require("express");
//const {postGoods, getGoods}=require('../controllers/goods');
const Product=require("../models/goods");
const router=express.Router();
const { urlencoded } = require('express');
router.use(express.json())
router.use(urlencoded({ extended: false}))
router.post('', (req, res)=>{
    console.log(req.body);
    let product=new Product(req.body);
    product.save()
    .then(it=>{
        res.json(it);
    })
    .catch(err=>{
        res.json({error:err});
    });
})
router.get('',(req,res)=>{
Product.find()
.then(d=>{
    res.json(d);
})
.catch(err=>{
    res.json({error:err});
})
} )
module.exports=router;