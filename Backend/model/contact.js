const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  designation: {
    type: String,
    // required: true,
  },
  company: {
    type: String,
    // required: true,
  },
  industry: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  phonenumber: {
    type: String,
    // required: true,
  },
  country: {
    type: String,
    // required: true,
  },
  postedby : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
    // required : true
  }
});
module.exports = mongoose.model("Contact", ContactSchema);