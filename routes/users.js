let mongoose =  require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/travelblog');


let schema = mongoose.Schema(
  {
    destination:{
      type:String,
      required:true
    },
    description:{
      type:String,
      required:true
    }
  }
)

module.exports = mongoose.model('travelblog', schema);