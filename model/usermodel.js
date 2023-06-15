const chris = require("mongoose");

const userSchema = chris.Schema({
  brand: {
    type: String,
  },
  plateNumber: {
    type: String,
  },
  sitNumber: {
    type: String,
  },
  color: {
    type: String,
  },
  engineOil: {
    type: String,
  },
});

const userModel = chris.model("cars", userSchema);

module.exports = userSchema;
