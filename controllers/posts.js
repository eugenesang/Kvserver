const {readFile, writeFile}=require('fs');
let getPosts=(req, res)=>{
    console.log("posts requested");
    readFile("./public/db.json", (err, dat)=>{
        if(err){
            console.trace(err);
        }
        dat=dat.toString();
        dat=JSON.parse(dat);
        res.json(dat.posts);
    })    
}
let postPost=(req, res)=>{
    readFile("./public/db.json", (err, dat)=>{
        if(err){
            console.trace(err);
            res.json({error:err.message});
            return ;
        }
        dat=dat.toString();
        dat=JSON.parse(dat);
        let post=req.body;
        dat.posts.push(post);
        writeFile("./public/db.json", JSON.stringify(dat), err=>err);
        res.json(dat.posts);
    })
}
module.exports={getPosts, postPost};