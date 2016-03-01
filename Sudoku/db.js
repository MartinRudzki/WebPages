/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




var mongoose = require('mongoose');  
var userSchema = new mongoose.Schema({  
  Username: String,
  Password: String
});
mongoose.connect('mongodb://localhost/Sudoku-Zen-Garden');
mongoose.model('User', userSchema);  


var user1 = new User({Username: 'Test', Password: 'password'});

user1.Username = user1.name.toUpperCase();//Test code to change username to uppercase
console.log(user1);

user1.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});