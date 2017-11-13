/**
 * @desc: user
 * @author: 陈彤
 * @date: 2017/11/13 11:09
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  dateCrawled: Date
});

module.exports = mongoose.model('User', userSchema);
