
/* 
    File:  js/tilesRemain.js
    Assignment 9:  Scrabble
    Created by: Martin_Rudzki@student.uml.edu
    Orginal Author: Jesse Heines 
    Date: 12/03/2015
    JS for list
 */

$(document).ready(function () {

  // jQuery for the top tabs.
  (function ($) {
    $("#myTabs").tabs();
  })(jQuery);


  (function ($) {
    function tilesRemainingg() {
    // define variables here to thwart hoisting
    var char;          // uppercase character indicated by the loop index
      var newTableRow;   // one row of the table
      var newTableCell;  // one cell in a table row
      var nTilesOriginal = 0;    // number of tiles in original distribution
      //    (to check that all 100 accounted for)
      var nTilesRemaining = 0;   // number of tiles remaining during the game

      // populate table of tile values
      // note that an associative array is actually an object, so to get its length
      //    we have to first reference its keys and count those
      for (k = 0 ; k < Object.keys(scrabbleTiles).length + 1 ; k++) {
        // convert the integer loop index to an uppercase character, which the
        //    subscript of the associative array of tile objects
        if (k < Object.keys(scrabbleTiles).length - 1) {
          char = String.fromCharCode(65 + k);
        } else if (k < Object.keys(scrabbleTiles).length) {
          char = "_";
        } else {
          char = "Total";
        }

        // create a new table row to hold the info on one tile
        newTableRow = $("<tr></tr>");

        // create a new table cell to hold the letter of the tile we're looking at
        newTableCell = $("<td></td>");
        if (k < Object.keys(scrabbleTiles).length) {  // all rows except the last
          if (char !== "_") {   // handle all tiles except the blank
            // put the letter of the tile into the new table cell
            newTableCell.text(char);
          } else {                // handle the blank
            newTableCell.text("Blank");
          }
        } else {  // handle the last row, which will contain the total number of tiles
          newTableCell.attr("colspan", "2");   // row title will span 2 columns
          newTableCell.css({     // format the last row as white text on black background
            "font-weight": "bold",
            "font-style": "italic",
            "background-color": "black",
            "color": "white",
            "text-align": "right"
          });
          newTableCell.text("Total Tiles:");   // set title for last row
        }
        // append the new table cell to the new table row
        newTableRow.append(newTableCell);

        // display letter tile values
        if (k < Object.keys(scrabbleTiles).length) {    // all rows except the last
          // create a new table cell to hold the value of the tile we're looking at
          newTableCell = $("<td></td>");
          // put the letter of the tile into the new table cell
          // here we can use the dot syntax because "value" is a plain indentifier
          newTableCell.text(scrabbleTiles[char].value);
          // append the new table cell to the new table row
          newTableRow.append(newTableCell);
        }

        // display original letter tile distribution
        if (k < Object.keys(scrabbleTiles).length) {    // all rows except the last
          // create a new table cell to hold the value of the tile we're looking at
          newTableCell = $("<td></td>");
          // put the letter of the tile into the new table cell
          // here we can use the dot syntax because "value" is a plain indentifier
          newTableCell.text(scrabbleTiles[char]["originalDistribution"]);
          // add number of tiles for this letter to the count of the total number of tiles
          nTilesOriginal += scrabbleTiles[char]["originalDistribution"];
          // append the new table cell to the new table row
          newTableRow.append(newTableCell);
        }

        // create a new table cell to hold the number of tiles remaining of the tile
        //    we're looking at
        newTableCell = $("<td></td>");
        if (k < Object.keys(scrabbleTiles).length) {
          // put the numer of tiles for the letter into the new table cell
          // here we must use the 2-D array syntax because "numberRemaining" contains a hyphen
          newTableCell.text(scrabbleTiles[char]["numberRemaining"]);
          // add number of tiles for this letter to the count of the total number of tiles
          nTilesRemaining += scrabbleTiles[char]["numberRemaining"];
          // append the new table cell to the new table row
          newTableRow.append(newTableCell);
        } else {
          // add cell for total number of letter tiles in original distribution
          newTableCell.css({
            "font-weight": "bold",
            "background-color": "black",
            "color": "white"
          });
          newTableCell.text(nTilesOriginal);
          // append the new table cell to the new table row
          newTableRow.append(newTableCell);

          newTableCell = $("<td></td>");  // create another table cell
          // add cell for total number of letter tiles remaining
          newTableCell.css({
            "font-weight": "bold",
            "background-color": "black",
            "color": "white"
          });
          newTableCell.text(nTilesRemaining);
          // append the new table cell to the new table row
          newTableRow.append(newTableCell);
        }

        // append the complete table row to the table
        $("#tbl").append(newTableRow);
      }
    }
    tilesRemaining = tilesRemainingg();
  })(jQuery);
});