/* 
    File:  js/scrabbleTilesInfo.js
    Assignment 9:  Scrabble
    Author: Martin Rudzki
    Email: Martin_Rudzki@student.uml.edu  
    Credit for code: Patrick Quaratiello
    Edited:12/13/2015 
 */

$(document).ready(function () {
  /*** Learned .html()***
  * The following shows you how to use ".html"
  * http://www.w3schools.com/html/html_scripts.asp
  * Init UI
  */
  $('.scrabbleScore').html(scrabbleSum);// 0
  $('.wordScore').html(currentWordSum); // 0
  $('.currentWord').html(strWord);      // ---
  errorMessage(CLR);
  dragAndDrop();

  /*** Learned Drag and drop ***
  * The follwoig link has great examples in using drag and drop in jquery.
  *   - It shows you how to do a simple implemtation. 
  *   - Shows you how to restrict movements with in a boarder.
  *   - Drag and drop game,... great link!
  * source: http://www.elated.com/articles/drag-and-drop-with-jquery-your-essential-guide/
  * ******************************Drag and drop code***************************************
  * There are three different type of tiles on the board and then the tile holder itself.
  * This code is replicated three times with small tweeks to each. Here is a general discription of each:
  *   - $(".boardSpace").droppable   = Blank space on scrabble board, no modifaction need to letter
  *   - $(".boardSpaceDL").droppable = Double letter square, modify score appropriately 
  *   - $(".boardSpaceDW").droppable = Double word square, multiply entire score by 2.
  *   - $("[class^='holderSpace-']").droppable = Piece is no longer in play bring back to tray and 
  *                                              remove any modifications to the score.
  */
  function dragAndDrop() {

    // When placed on an empty sq, letter does not get modified.
    $(".boardSpace").droppable({
      drop: function (e, ui) {

        $(this).append(ui.draggable);
        itemId = $(ui.draggable).attr("id");
        var letter;
        //get some info about the placed piece
        letter = getLetterFromId(itemId);
        errorMessage(CLR);

        /*Checks letter to see if in play.
        * if, true then the tile is being moved around the board.  
        *   Need to make sure tile gets proper score.
        * else, put into play
        *   no modifers this is a standard square.
        */ 
       
          if (document.getElementById(itemId).classList.contains("inPlay")) {
            // check if it had a double letter flag class
            if (document.getElementById(itemId).classList.contains("doubleLetter")) {
              // remove double leter by subtracting letter one time.
              // The peice is still on the board and needs to reatain its value.
              currentWordSum -= scrabbleTiles[letter].value;
              // Update current word sum.
              $('.wordScore').html(currentWordSum);
              document.getElementById(itemId).classList.remove("doubleLetter"); // remove double letter
            } // put into play, no modifers this is a standard square.
          } else {
              document.getElementById(itemId).className += " inPlay";
              currentWordSum += scrabbleTiles[letter].value;
            // Update current word sum.
              $('.wordScore').html(currentWordSum);
              errorMessage(CLR);
          }
          
          //jQuery: how to get contents from a table row 
          // http://stackoverflow.com/questions/14460421/jquery-get-the-contents-of-a-table-row-with-a-button-click

          var $row = $(this).closest("tr"); // Find the row
          var $tds = $row.find("td");       // find tds
          var numCharsHTML = "";            // distance to .jpg tag
          var letterHTML = "";              // the string given by .html() function
          var keyedLetters = "";            // string with keyed letters for parsing later
          var arrayLetters = "";
          /***Learned .search ***
          * source:http://www.w3schools.com/jsref/jsref_search.asp
          * ".search" returns the position value. 
          * Function desctiption:
          * - Grabs html string
          * - Searchs for .jpg 
          * - Subtract one from the postion value this will get the actual character we are looking for
          *     Example: Scrabble_Tile_A.jpg
          */
          $.each($tds, function () {
            // building a string to parse later to see if letters are next to eachother
            letterHTML = $(this).html();
            numCharsHTML = letterHTML.search(".jpg"); //Find where .jpg is, this is end of url
            if (letterHTML.substring(numCharsHTML - 1, numCharsHTML) === "")
              keyedLetters += "%";
            else // Determine letter based on end .jpg
              keyedLetters += letterHTML.substring(numCharsHTML - 1, numCharsHTML);
          });
          /***Learned .split()*** 
          * Split a string into an array of substrings, and returns the new array.
          * Source: http://www.w3schools.com/jsref/jsref_split.asp
          * -------------------------------------------------------------
          * 
          *
          */
          arrayLetters = keyedLetters.split("");
          checkRow(arrayLetters);
          $('.currentWord').html(strWord);
          if (doubleWordFlag == 1) {
            doubleCurrentWordSum = currentWordSum * 2;
            $('.wordScore').html(doubleCurrentWordSum);
          }
        
      }
    });

    // Double letter
    $(".boardSpaceDL").droppable({
      drop: function (e, ui) {

        $(this).append(ui.draggable);
        itemId = $(ui.draggable).attr("id");
        var letter;
        errorMessage(CLR);

        //get some info about the placed piece
        letter = getLetterFromId(itemId);
        /*Checks letter to see if in play.
          * if, true then the tile is being moved around the board.  
          *   Need to make sure tile gets proper score.
          * else, put into play
          *   no modifers this is a standard square.
          */
        
          //if you already put this piece in play
          if (document.getElementById(itemId).classList.contains("inPlay")) {
            document.getElementById(itemId).className += " doubleLetter"; // add double letter flag class
            currentWordSum += scrabbleTiles[letter].value; // add letter again, already in play so only need to add one more time
            $('.wordScore').html(currentWordSum);
            errorMessage(CLR);
          } else { // if the letter is not in play, set it in play, add DOUBLE letter to word score.
            document.getElementById(itemId).className += " inPlay";
            document.getElementById(itemId).className += " doubleLetter"; // add flag class
            currentWordSum += (2 * scrabbleTiles[letter].value);
            $('.wordScore').html(currentWordSum);
            errorMessage(CLR);
          }

          //jQuery: how to get contents from a table row 
          // http://stackoverflow.com/questions/14460421/jquery-get-the-contents-of-a-table-row-with-a-button-click

          var $row = $(this).closest("tr");  // Find the row
          var $tds = $row.find("td"); // find tds
          var numCharsHTML = ""; // distance to .jpg tag
          var letterHTML = ""; // the string given by .html() function
          var keyedLetters = ""; // string with keyed letters for parsing later
          var arrayLetters = "";
          /***Learned .search ***
          * source:http://www.w3schools.com/jsref/jsref_search.asp
          * ".search" returns the position value. 
          * Function desctiption:
          * - Grabs html string
          * - Searchs for .jpg 
          * - Subtract one from the postion value this will get the actual character we are looking for
          *   Example: Scrabble_Tile_A.jpg
          */

          $.each($tds, function () {
            // building a string to parse later to see if letters are next to eachother
            letterHTML = $(this).html();
            numCharsHTML = letterHTML.search(".jpg"); //Find where .jpg is, this is end of url
            if (letterHTML.substring(numCharsHTML - 1, numCharsHTML) === "")
              keyedLetters += "%";
            else
              keyedLetters += letterHTML.substring(numCharsHTML - 1, numCharsHTML); // Determine letter based on end .jpg
          });

          arrayLetters = keyedLetters.split("");
          checkRow(arrayLetters);
          $('.currentWord').html(strWord);

          if (doubleWordFlag == 1) {
            doubleCurrentWordSum = currentWordSum * 2;
            $('.wordScore').html(doubleCurrentWordSum);
          }
      }
    });

    // Double Word
    $(".boardSpaceDW").droppable({
      drop: function (e, ui) {
        $(this).append(ui.draggable);
        itemId = $(ui.draggable).attr("id");
        var letter;
        errorMessage(CLR);

        //get some info about the placed piece
        letter = getLetterFromId(itemId);

       
          //if you already put this piece in play
          if (document.getElementById(itemId).classList.contains("inPlay")) {
            document.getElementById(itemId).className += " tripleWord"; // add double letter flag class
            errorMessage(CLR);
          }
            //if the letter is not in play, set it in play, add DOUBLE letter to word score.
          else {
            document.getElementById(itemId).className += " inPlay";
            document.getElementById(itemId).className += " tripleWord"; // add flag class
            currentWordSum += scrabbleTiles[letter].value;
            errorMessage(CLR);
          }

          //jQuery: how to get contents from a table row 
          // http://stackoverflow.com/questions/14460421/jquery-get-the-contents-of-a-table-row-with-a-button-click

          var $row = $(this).closest("tr");  // Find the row
          var $tds = $row.find("td"); // find tds
          var numCharsHTML = ""; // distance to .jpg tag
          var letterHTML = ""; // the string given by .html() function
          var keyedLetters = ""; // string with keyed letters for parsing later
          var arrayLetters = "";
          /***Learned .search ***
          * source:http://www.w3schools.com/jsref/jsref_search.asp
          * ".search" returns the position value. 
          * Function desctiption:
          * - Grabs html string
          * - Searchs for .jpg 
          * - Subtract one from the postion value this will get the actual character we are looking for
          *     Example: Scrabble_Tile_A.jpg
          */

          $.each($tds, function () {
            // building a string to parse later to see if letters are next to eachother
            letterHTML = $(this).html();
            numCharsHTML = letterHTML.search(".jpg"); //Find where .jpg is, this is end of url
            if (letterHTML.substring(numCharsHTML - 1, numCharsHTML) === "")
              keyedLetters += "%";
            else
              keyedLetters += letterHTML.substring(numCharsHTML - 1, numCharsHTML); // Determine letter based on end .jpg
          });

          arrayLetters = keyedLetters.split("");
          checkRow(arrayLetters);
          $('.currentWord').html(strWord);

          doubleWordFlag = 1;
          if (doubleWordFlag == 1) {
            doubleCurrentWordSum = currentWordSum * 2;
            $('.wordScore').html(doubleCurrentWordSum);
          }
      }
    });
    /*
    * Letter tray
    * Function:
    * If piece was taken off from playing board remove it from play. 
    * Check if double letter score was applied. If true, subtract the letter value once.
    * Subtract letter value one more time to zero it out.
    */
    $("[class^='holderSpace-']").droppable({
      hoverClass: 'active',
      drop: function (e, ui) {
        $(this).append(ui.draggable);
        itemId = $(ui.draggable).attr("id");

        var imageURL = (document.getElementById(itemId).src); //Get image URL from item
        var numChars = imageURL.search(".jpg"); //Find where .jpg is, this is end of url
        var letter = imageURL.substring(numChars - 1, numChars); // Determine letter based on end .jpg

        // If piece was taken off board, remove it from play
        if (document.getElementById(itemId).classList.contains("inPlay"))
          document.getElementById(itemId).classList.remove("inPlay");
        // If piece was a double letter score, change score.
        if (document.getElementById(itemId).classList.contains("doubleLetter")) {
          document.getElementById(itemId).classList.remove("doubleLetter");
          currentWordSum -= scrabbleTiles[letter].value;
        }
        // remove from word score
        currentWordSum -= scrabbleTiles[letter].value;
        if (doubleWordFlag == 1) {
          doubleCurrentWordSum = currentWordSum * 2;
          $('.wordScore').html(doubleCurrentWordSum);
        }
        else
          $('.wordScore').html(currentWordSum);

        //remove letter from "word"
        strWord.replace(letter, "---");
        errorMessage(CLR);
      }
    });
  }
});
