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
    properties: {
      forms: {
        type: Boolean,
        default: false,
      },
      auditPage: {
        type: Boolean,
        default: false,
      },
      names: {
        type: Boolean,
        default: false,
      },
      finalName: {
        type: Boolean,
        default: false,
      },
    },
  },
});
// const userDetails = new Schema({
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   accessPages: {
//     type: Object,
//     required: true,
//     default: {
//       forms: false,
//       auditPage: false,
//       names: false,
//       finalName: false,
//     },
//   },
// });

const UserSchema = model("userDetails", userDetails);

module.exports = UserSchema;
