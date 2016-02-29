/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {



    jQuery.validator.addMethod("acceptOnly", function (value, element, param) {//Adds a new validation rule called acceptOnly which allows you to choose which characters are valid.
        return value.match(new RegExp("." + param + "$"));
    });

    $("#theForm1").validate({//Function with rules for validating forms
        rules: {
            Username1: {
                required: true,
                minlength: 8,
                maxlength: 15,
                acceptOnly: "[0-9a-zA-Z]+"//only allow number and letters
            },
            Password1: {
                required: true,
                minlength: 8,
                maxlength: 15,
                acceptOnly: "[0-9a-zA-Z]+"
            },
            rePassword1: {
                required: true,
                equalTo: "#Password1"
            }
        },
        messages: {//Error messages to display when the form is invalid.
            Username1: {acceptOnly: "Invalid: Letters and Numbers only."},
            Password1: {acceptOnly: "Invalid: Letters and Numbers only."},
            rePassword1: {equalTo: "Your passwords do not match."}
        }     
      
    });




    $("#theForm2").validate({//Function with rules for validating forms
        rules: {
            Username2: {
                required: true,
                minlength: 8,
                maxlength: 15,
                acceptOnly: "[0-9a-zA-Z]+"
            },
            Password2: {
                required: true,
                minlength: 8,
                maxlength: 15,
                acceptOnly: "[0-9a-zA-Z]+"
            }
        },
        messages: {//Error messages to display when the form is invalid.
            Username2: "Username or Password invalid.",
            Password2: "Username or Password invalid."
        }
    });
    
    //Need a function that when submit is pressed and all entries are valid will: store the new account info into the DB.
    
    
});

//require("db");

