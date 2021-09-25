const mongoose= require ("mongoose");
const Schema =mongoose.Schema;

const productsSchema =new Schema({
  name:{ type: String}, 
  category: {type: String}, 
  price: {type: Number}, 
  negotiable:{type: Boolean },
  stock:{type:Number},
  quantityNumber:{type:Number},
  quantityUnit:{type:String},
  sellerName:{type:String},
  sellerContact:{type:String}
  
}, {timestamps: true});

const Product=mongoose.model("Product", productsSchema);

module.exports=Product;