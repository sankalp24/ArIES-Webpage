var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   quantity: String,
   description: String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
      {
         enr_no: String,
         quantity: String
      }
   ]
});

module.exports = mongoose.model("Campground", campgroundSchema);