const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  admin_name: { type: String },
  admin_email: { type: String, unique: true },
  password: { type: String },
});
const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
