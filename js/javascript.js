
/*
File: ~js/javascript.js
Edit by: Martin Rudzk, UMass Lowell, 91.461 GUI Programming 1
Email: Martin_Rudzki@student.uml.edu
CopyRight (c) 2015 by Martin Rudzki. You are free to use any of my code here.
Description: Generate Multipication Table.
Created: MR 10/20/2015
Edited:  MR 11/05/2015
-----------------------------------------
Table code was heavily modififed but the information that helped me was from.
Source: http://stackoverflow.com/questions/28777440/how-to-make-a-simple-5-line-javascript-multiplication-table-for-loop
Created: Martin_Rudzki@student.uml.edu 10/20/2015
*/

function DisplayTable() {
  var rowEnd = 4;
  var colEnd = 5;
  var colum = [];
  var row = [];

  colum.push(parseInt(document.getElementsByName("colum")[0].value));
  colum.push(parseInt(document.getElementsByName("colum")[1].value));
  colum.push(parseInt(document.getElementsByName("colum")[2].value));
  colum.push(parseInt(document.getElementsByName("colum")[3].value));
  colum.push(parseInt(document.getElementsByName("colum")[4].value));

  row.push(parseInt(document.getElementsByName("row")[0].value));
  row.push(parseInt(document.getElementsByName("row")[1].value));
  row.push(parseInt(document.getElementsByName("row")[2].value));
  row.push(parseInt(document.getElementsByName("row")[3].value));
  
  var htmlBuffer = "<table border='1'>";
  var i;

  // Top Row input values
  htmlBuffer += "<tr>";
  htmlBuffer += "<td></td>";
  for (i = 0; i < colEnd; i++) {
    htmlBuffer += "<td><input type=\"text\" name=\"colum\" value=\"" + colum[i] + "\"maxlength=\"4\" size=\"1\" required></td>";
  }
  htmlBuffer += "</tr>";
  for (i = 0; i < rowEnd; ++i) {
    /* add a opening table row tag to the buffer */
    htmlBuffer += "<tr>";
    htmlBuffer += "<td id=\"tabRow\" >" + "<input type=\"text\" name=\"row\" value=\"" + row[i] + "\" maxlength=\"4\" size=\"1\" required>" + "</td>";
    for (var j = 0; j < colEnd; ++j) {
      /* add a table cell with the multiplication inside it to the buffer */
      htmlBuffer += "<td>" + (colum[j] * row[i]) + "</td>";
    }

    /* add a closing table row tag to the buffer */
    htmlBuffer += "</tr>";
  }

  /* add a closing table tag to the buffer */
  htmlBuffer += "</table>";

  /* print/put generated html code inside the DIV element */
  document.getElementById("myTable").innerHTML = htmlBuffer;
}

/*
The following code was taken from the following website.
Source: http://stackoverflow.com/questions/26498899/jquery-validate-custom-error-message-location
Contatct Email: Martin_Rudzki@student.uml.edu
Created: MR 10/20/2015
$('#submmit').click(function () {
*/


/*
  Checks to see if there is an empty space, if so sets bool to false and will not generate the table.
  Contatct Email: Martin_Rudzki@student.uml.edu
  Created: MR 10/20/2015
*/

$(document).ready(function () {
  $('#submmit').click(function () {
    var bool = true;
    $('#form').validate({
      rules: {
          row: {
          required: true,
          number:   true
        },
        colum: {
          required: true,
          number:   true
        }
      },
      messages: {
        row:   "Please enter a number",
        colum: "Please enter a number"
      },
       errorElement: 'div',
       errorLabelContainer: ".errorTxt"
           $("[name = 'row']").each(function (index) {
      if ($(this).val() == '') {
        bool = false;
      }
    });
    $("[name = 'colum']").each(function (index) {
      if ($(this).val() == '') {
        bool = false;
      }
    });
    if (bool == true) {
      DisplayTable();
    }
    });
  });
});

