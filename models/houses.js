const mongoose= require ("mongoose");
const Schema =mongoose.Schema;

const housesSchema =new Schema({
  name:{ type: String}, 
  price: {type: Number}, 
  category: {type: String}, 
  accesories: {type: Array},
  waterResponsibility:{type: String},
  powerResponsibility:{type: String},
  rooms:{type:Number},
  ceiling:{type:String},
  floor:{type:String},
  vaccantRooms:{type:String},
  location:{type:String},
  owner:{type:Object}
  
}, {timestamps: true});

const House=mongoose.model("House", housesSchema);

module.exports=House;