const mongoose = require("mongoose")
const buildModel = require('./common');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Folder = buildModel('Folder', {
  name: String,
  description: String,
  shareWith: [{
    kind: String,
    item: { type: ObjectId, refPath: 'shareWith.kind' }
  }],
  parent: { type: ObjectId, ref: 'Folder' },
})
module.exports.Folder = Folder

