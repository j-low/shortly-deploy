var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database'); //need to point to actual db

var db = mongoose.connection;

db.on('error', function(){
  console.log("DATA ERROR!!!");
})

// db.once('open', function callback () {
  var urlSchema = mongoose.Schema({
    _id: Number,
    url: String,
    base_url: String,
    title: String,
    visits: Number
  });

  module.exports.Link = mongoose.model('Url', urlSchema);

  var userSchema = mongoose.Schema({
    _id: Number,
    username: String,
    password: String
  });

module.exports.User = mongoose.model('User', userSchema);
  // var User = mongoose.model('User', userSchema);
// });

module.exports = db;

// var Bookshelf = require('bookshelf');

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });
// var db = Bookshelf.initialize({
//   client: 'sqlite3',
//   connection: {
//     host: '23.99.65.65',
//     user: 'your_database_user',
//     password: 'password',
//     database: 'shortlydb',
//     charset: 'utf8',
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   }
// });

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('base_url', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });


