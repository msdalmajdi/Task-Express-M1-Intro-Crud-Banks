const mongoose = require("mongoose");
const { Schema } = mongoose;

const AccountSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  funds: { type: Number, default: 0 },
});

module.exports = mongoose.model("Account", AccountSchema);
