let {readFile, writeFile}=require('fs');
let getHouses=(req, res)=>{
    console.log("houses requested");
    readFile("./public/db.json", (err, dat)=>{
        if(err){
            console.trace(err);
        }
        dat=dat.toString();
        dat=JSON.parse(dat);
        res.json(dat.houses);
    })    
};
let postHouse=(req, res)=>{
    readFile("./public/db.json", (err, dat)=>{
        if(err){
            console.trace(err);
            res.json({error:err.message});
            return ;
        }
        dat=dat.toString();
        dat=JSON.parse(dat);
        let house=req.body;
        dat.houses.push(house);
        writeFile("./public/db.json", JSON.stringify(dat), err=>err);
        res.json(dat.houses);
    })
};
module.exports={getHouses, postHouse};