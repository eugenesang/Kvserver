const mongoose=require("mongoose");
const express=require("express");
const uri="";// addd your own url link
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true})
.then(data=>{
    app.listen(3001, ()=>{console.log("app listening on port 3001")});
})
.catch(err=>console.trace(err));
app.use("/news", require("./routes/news"));
app.use("/posts", require("./routes/posts"));
app.use("/houses", require("./routes/houses"));
app.use("/goods", require("./routes/goods"));
app.use('/login', require("./routes/login"));
app.use("/register", require("./routes/register"))
