let {readFile, writeFile}=require('fs');
let getNews=(req, res)=>{
    console.log("news requested");
    readFile("./public/db.json", (err, dat)=>{
        if(err){
            console.trace(err);
        }
        dat=dat.toString();
        dat=JSON.parse(dat);
        res.json(dat.news);
    })    
};
let postNews=(req, res)=>{
    readFile("./public/db.json", (err, dat)=>{
        if(err){
            console.trace(err);
            res.json({error:err.message});
            return ;
        }
        dat=dat.toString();
        dat=JSON.parse(dat);
        let news=req.body;
        dat.news.push(news);
        writeFile("./public/db.json", JSON.stringify(dat), err=>err);
        res.json(dat.news);
    })
};
module.exports={getNews, postNews};