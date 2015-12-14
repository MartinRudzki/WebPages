/* 
    File:  js/scrabbleEverythingElse.js
    Assignment 9:  Scrabble
    Author: Martin Rudzki
    Email: Martin_Rudzki@student.uml.edu  
    Orginal Author: Patrick Quaratiello
    Edited:12/13/2015 
 */

/**** Global variables and flags****/
var CLR = 0;         // *Rub paddels together* clear!...errors
var NOWORD = 1;      // not placed a letter on the board
var NOTADJCNTWORD = 2; // All tiles are not adjacent

var scrabbleSum = 0;          // Total score
var currentWordSum = 0;       // Potential score
var doubleCurrentWordSum = 0; // Sum of double word
tilesRemaining = null;        // jQuery function, needs to be in global

var strWord = "---";    // Default start word
var validWord = false;  // Default Word to not valid. You need to prove that it is valid.
var doubleWordFlag = 0; // See if 2 times multipler needs to be applied.

function getLetterFromId(Id) { 
  var imageURL = (document.getElementById(Id).src); //Get image URL from item
  var numChars = imageURL.search(".jpg"); //Find where .jpg is, this is end of url
  var letter = imageURL.substring(numChars - 1, numChars); // Determine letter based on end .jpg
  return letter;
}

/*
* Error Message Handling
* 0 = no error
* 1 = You have not placed a letter on the board
* 2 = Tiles are not adjacent
*/
function errorMessage(intErrorNum) {
  var strError;
  if (intErrorNum === 0)
    strError = "&nbsp";
  else if (intErrorNum === 1)
    strError = "You have not placed a letters on the board.";
  else if (intErrorNum === 2)
    strError = "All tiles are not adjacent.";
  else
    strError = "Invalid!";
  $('.errorBox').html(strError);
}

/*
* Function returns character letter
* It gets an assci number between 65 and 91. 
* Convert Ascii numbers to characters. If 91 is found turn it into a space
* Still need to create a function that updates the table to the number ramining.
*/
function getRandomLetter() {
  var letterAsciiNum = getRandomInt();
  if (letterAsciiNum === 91)
    var letterChar = "_";
  else
    letterChar = String.fromCharCode(letterAsciiNum);
  var lettersAvailable = scrabbleTiles[letterChar].numberRemaining;
  // This is subtracting correctly the remainder correctly!
  scrabbleTiles[letterChar].numberRemaining = (scrabbleTiles[letterChar].numberRemaining - 1);
  console.log("Letter    :" + letterChar);
  console.log("Remainder :" + lettersAvailable);
  console.log("New Remain:" + scrabbleTiles[letterChar].numberRemaining);

  if (scrabbleTiles[letterChar].numberRemaining === -10) {
    
    while (scrabbleTiles[letterAsciiNum].numberRemaining === 0) {
      letterAsciiNum = getRandomInt();
      if (letterAsciiNum === 91)
        var letterChar = "_";
      else
        letterChar = String.fromCharCode(letterAsciiNum);
    }
  }
  return letterChar;
}

/*
* Function: submitWord 
* Add word score to totals sum score.
* Check double word flag to see if you need to add the dobule word score.
* Capture string that was submitted; create an array of lettrs form that string
* Reset variables.
*/
function submitWord() {
  if (validWord == true && strWord != "---" && strWord.length > 1)// we need to check words at some point
  {
    var arrayLetters = 0; // will hold string of characters that were submitted
    var letterId;
    var letter;
    var arrayLetterId = [];
    /******** totaling word value**************/
    if (doubleWordFlag)
      scrabbleSum += doubleCurrentWordSum;
    else
      scrabbleSum += currentWordSum;

    /*** Learned split() ***
    * Source:http://www.w3schools.com/jsref/jsref_split.asp
    * Split a string into an array of substrings, and returns the new array
    */
    arrayLetters = strWord.split("");

    /********* Resetting variables back to default ***********/ 
    strWord = "---"; //set word to blank
    $('.scrabbleScore').html(scrabbleSum); //update UI
    $('.wordScore').html(currentWordSum);
    $('.currentWord').html(strWord);
    validWord = false; // word is now not valid

    // set new letter remaining amounts
    for (var i = 0; i < arrayLetters.length; i++) {
      // This is subtracting the remainder correctly!
      var lettersAvailable = scrabbleTiles[letterChar].numberRemaining;
      console.log("Letter    :" + arrayLetters[i]);
      console.log("Remainder :" + lettersAvailable);
      scrabbleTiles[arrayLetters[i]].numberRemaining -= 1;
      console.log("New Remain:" + scrabbleTiles[arrayLetters[i]].numberRemaining);
    }
   
    $(".inPlay").addClass("submitted"); // if the word is now "submitted"
    $(".submitted").removeClass("inPlay");
    $(".submitted").each(function () { arrayLetterId.push(this.id); });
    for (var i = 0; i < arrayLetterId.length; i++) {
      $(".submitted").attr("id", "sub-" + currentWordSum);
    }
    currentWordSum = 0; // word score is 0
    errorMessage(CLR);
  } // if current word is 0, it means no points on the board.
  else if ($('.wordScore').html() == 0) {
    errorMessage(NOWORD);
  } // Else Word not adjacent.
  else
    errorMessage(NOTADJCNTWORD);
}

/*
* Used to get a random integer between the ascii character range of 65 and 91
*/
function getRandomInt(min, max) {
  var min = 65; //  ascii = 'A'
  var max = 91; //  ascii = '[' but you use it for a blank space.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*
* Function
* Checking to see if letters in the row are adjecent to each other.
* % = '_' it represents a blank square
*/
function checkRow(rowArray) {
  var wordFlag = 0; // if wordFlag is true, the word has begun and next place cannot be space.
  strWord = "";
  for (var i = 0; i < rowArray.length; i++) {
    if (rowArray[i] != "%" && wordFlag == -1) {
      console.log("ERR");
      errorMessage(NOTADJCNTWORD);
      strWord = "---";
      validWord = false;
      break;
    }
    if (rowArray[i] != "%") {
      wordFlag = 1;
      strWord += rowArray[i];
      validWord = true;
    }
    if (rowArray[i] == "%" && wordFlag == 1) {
      //better not find another letter!
      wordFlag = -1;
      validWord = true;
    }
  }
}

// Creating letters 
function getLetters() {
  var strPieces = "";
  var i = 1;
  // For loop creates 7 tiles
  for (var i = 1; i < 8; i++) {
    if ($(".holderSpace-" + i).html() == "" && strWord == "---") {
      strPieces = '<img id = "letter-' + i + '" src="scrabble_graphics/error.jpg" alt="error" width="60" height="60">';
      $(".holderSpace-" + i).html(strPieces);
      $(document).ready(function () {
        document.getElementById("letter-" + i).src = scrabbleTiles[getRandomLetter()].image;
      });
    }

    $("[id^='letter-']").draggable({
      revert: true,
      stop: function (event, ui) { }
    });
  }
 
}
