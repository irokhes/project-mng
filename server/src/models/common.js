const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const buildModel = function (name, schema) {
  return mongoose.model(name, new Schema(schema, {timestamps: true}))
}
module.exports = buildModel