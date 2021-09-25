const {Schema, model}=require("mongoose");
let userSchema=new Schema({
name:{type:String, required:true},
email:{type:String, require:true},
password:{type:String,required:true},
phoneNumber:{type:String, required:true}
},{timestamps:true});
const User=model('User', userSchema);
module.exports=User;