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
  accessPages: {
    type: Object,
    required: true,
    default: {
      forms: false,
      auditPage: false,
      names: false,
      finalName: false,
    },
  },
});

const UserSchema = model("userDetails", userDetails);

module.exports = UserSchema;
