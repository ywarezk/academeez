/**
 * This file will contain a model for interacting with the
 * users collection
 */

const UserSchema = require('./user.schema');
const { model } = require('mongoose');

const User = model('User', UserSchema);

module.exports = User;
