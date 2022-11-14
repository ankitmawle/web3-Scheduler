const mongoose = require('mongoose');
const UserSchema  = new mongoose.Schema({
  
  admin:{
    type : Boolean,
    required : true,
  },
  name :{
    type  : String,
    required : true
  } ,
  email :{  
    type  : String,
    required : true
  },
  password :{
    type  : String,
    required : true
  },
  date :{
    type : Date,
    default : Date.now
  },
  DeviceID :{
    // {"Channel ID":Channel ID, "WriteAPIKey":WriteAPIKey,"readAPIKey":readAPIKey}
    //Not required for Admins
    type : Object,
    required : false
  },  
  userID:{
    //Unique per Device
    //0 is admin, else >1
    type : Number,
    required : true
  },
  adminConnectedDevices:{
    //Contains Device Ids and API keys
    type : Object,
    required: false,
  },
  NRIC:{
    type : String,
    required: true,
  },
  MNo:{
    type : Number,
    required : true   
  },
  Address:{
    type : String,
    required : false,
  },
  WIN:{
    type : String,
    required : false,
  }




});
const User= mongoose.model('User',UserSchema);

module.exports = User;