const mongoose             =      require("mongoose")

const importedbuyerschema  =     require("../schemas/buyerschema");

const Buyerschema          =     mongoose.Schema(importedbuyerschema)
const Buyersmodel          =     mongoose.model('buyers',Buyerschema) 

module.exports={
    buyers:Buyersmodel
}
