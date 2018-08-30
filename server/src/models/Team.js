const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Folder = require('./Folder');

module.exports.Team = Folder.discriminator('Team', new Schema({
}, {timestamps: true}))