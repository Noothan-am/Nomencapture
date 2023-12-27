const { Schema, model } = require("mongoose");
const userDetails = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserSchema = model("userDetails", userDetails);

module.exports = UserSchema;
