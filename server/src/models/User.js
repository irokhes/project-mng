const buildModel = require('./common');

module.exports.User = buildModel('User', {
    name: {
      type: String,
      default: ''
    },
    firstname: String,
    lastname: String,
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    jobTitle: {
      type: String,
      default: ''
    },
    avatarColor: String,
    team: { type: ObjectId, ref: 'Team' },
    role: String,
    status: String
  })