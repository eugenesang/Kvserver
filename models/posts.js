const mongoose= require ("mongoose");
const Schema =mongoose.Schema;

const postsSchema =new Schema({
  sender:{ type: String}, 
  title:{type: String},
  message: {type: String}, 
  images: {type: Array}, 
  location:{type: String }
  
}, {timestamps: true});

const Post=mongoose.model("Post", postsSchema);

module.exports=Post;