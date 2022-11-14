const mongoose = require('mongoose');
const ChainDataSchema  = new mongoose.Schema({
  
  chainName:{
    type : String,
    required : true,
  },
  tokenizAddress :{
    type  : String,
    required : true,
  } ,
  chainId :{  
    type  : Number,
    required : true
  },
  chainCoin :{
    type  : String,
    required : true
  },
  mintPrice :{
    type : Number,
    required : true,
  },
  chainLogo :{
    type  : String,
    required : true
  },
  wallet:{
    type:String,
    required : true,
  }
 
});
const ChainData= mongoose.model('ChainData',ChainDataSchema);

module.exports = ChainData;