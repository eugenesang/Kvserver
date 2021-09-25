const mongoose= require ("mongoose");
const Schema =mongoose.Schema;

const newsSchema =new Schema({
  sender:{ type: String}, 
  title:{type: String},
  message: {type: String}, 
  images: {type: Array}, 
  location:{type: String }
  
}, {timestamps: true});

const Story=mongoose.model("Story", newsSchema);

module.exports=Story;