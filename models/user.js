const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create the collection
var User = new Schema({
  username: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  }
});
// export the model
User = mongoose.model("User", User);
module.exports = User;
