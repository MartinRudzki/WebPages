/* 
 * SudokuZenGarden
 * db.js
 Found a lot of this code at http://mongoosejs.com/docs/
 */




var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    Username: String,
    Password: String
});

// Connect to the db
mongoose.connect("mongodb://localhost/Sudoku-Zen-Garden", function (err, db) {
    if (err) {
        return console.dir(err);
    }
    var db = mongoose.connection;
    var collection = db.collection('User');

});






var User = mongoose.model('User', userSchema);

var addUser = function (username, password) {
    var temp = new User({Username: username, Password: password});
    temp.save(function (err, User) {
        if (err) {
            console.log(err);
        } else {
            console.log('saved successfully:', User);
        }
    });
    return temp;
};

var loginValidation = function (username, password) {
    var error = 'error';
    var query = User.find({Username: username});
    if (query.Password == password) {
        return query;
    }
    else {
        return error;
    }
};


var user1 = new User({Username: 'Test', Password: 'password'});

user1.Username = user1.name.toUpperCase();//Test code to change username to uppercase
console.log(user1);

user1.save(function (err, User) {
    if (err) {
        console.log(err);
    } else {
        console.log('saved successfully:', User);
    }
});