const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let photoSchema = new Schema({
  title: {
    required: true,
    type: String
  },
  dateCreated: String
});

photo = mongoose.model("Photo", photoSchema);
module.exports = photo;
