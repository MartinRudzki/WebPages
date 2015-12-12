/*
File: ~js/javascript.js
Edit by: Martin Rudzk, UMass Lowell, 91.461 GUI Programming 1
Email: Martin_Rudzki@student.uml.edu
CopyRight (c) 2015 by Martin Rudzki. You are free to use any of my code here.
Description: Generate Multipication Table.
Created: MR 10/20/2015
Edited:  MR 11/05/2015
*/

$(document).ready(function () {
  /*
  The following website helped me with my understaing:
  Source:http://www.jacklmoore.com/notes/jquery-tabs/ 
  Desciption: Tab code
  Contatct Email: Martin_Rudzki@student.uml.edu
  Created: MR 12/03/2015
  */
  (function ($) {
    $("#myTabs").tabs();
  })(jQuery);

  (function ($) {
    $("#myTabs").tabs({
      disabled: [0]
    });
    $("#enable").click(function () {
      $("#myTabs").tabs("enable", 0);
    });
    $("#disable").click(function () {
      $("#myTabs").tabs("disable", 0);
    });
  })(jQuery);
  /*
  The following website helped me with my understaing:
  Source:http://jsfiddle.net/dmcgrew/EquTn/3/
  Description: Slider Code.
  Contatct Email: Martin_Rudzki@student.uml.edu
  Created: MR 12/03/2015
  */
  $(function () {
  $(".slider_row").slider({
    range: "min",
    value: 1,
    step: 1,
    min: -50,
    max: 50,
    create: function () {
      $(this).slider("option", "value", $(this).next().val());
    },
    slide: function (event, ui) {
      //get the id of this slider
      var id = $(this).attr("id");
      //select the input box that has the same id as the slider within it and set it's value to the current slider value. 
      $("span[class*="  + id + "]").text(ui.value);
      $("input[class*=" + id + "]").val(ui.value);
    }
  });
});
  /*
  The following website helped me with my understaing:
  Source:http://jsfiddle.net/dmcgrew/EquTn/3/
  Description: Slider Code.
  Contatct Email: Martin_Rudzki@student.uml.edu
  Created: MR 12/03/2015
  */
$(function () {
  $(".slider_colum").slider({
    orientation: "vertical",
    range: "min",
    value: 1,
    step: 1,
    min: -50,
    max: 50,
    create: function () {
      $(this).slider("option", "value", $(this).next().val());
    },
    slide: function (event, ui) {
      //get the id of this slider
      var id = $(this).attr("id");
      //select the input box that has the same id as the slider within it and set it's value to the current slider value. 
      $("span[class*=" + id + "]").text(ui.value);
      $("input[class*=" + id + "]").val(ui.value);
    }
  });
});
  /*
  The following website helped me with my understaing:
  Source:http://jsfiddle.net/dmcgrew/EquTn/3/
  Description: Slider Code.
  Contatct Email: Martin_Rudzki@student.uml.edu
  Created: MR 11/19/2015
  */
$("#form").validate({
  errorLabelContainer: "#errorTxt",
  wrapper: "div",
  errorClass: "error",
    rules: {
       row: {
        required: true,
        number: true
      },
      colum: {
        required: true,
        number: true,
      }
    },
    messages: {
      row: "Please enter a number in the left column.",
      colum: "Please enter a number in the top row.",
    },
    invalidHandler: function (form, validator) {
      $("#errorTxt").show();
    },
    unhighlight: function (element, errorClass) {
      if (this.numberOfInvalids() == 0) {
        $("#errorTxt").hide();
      }
      $(element).removeClass(errorClass);
    },
  });
  /*
  The following website helped .
  Source: http://stackoverflow.com/questions/26498899/jquery-validate-custom-error-message-location
  Function: Checks to see if there is an empty space, if so sets bool to false and will not generate the table.
  Contatct Email: Martin_Rudzki@student.uml.edu
  Created: MR 11/05/2015
  */
  $('#submmit').click(function (evt) {

    var bool = true;
    $("[name = 'colum']").each(function (index) {
      if ($(this).val() == '') {
        bool = false;
      }
    });

    $("[name = 'row']").each(function (index) {
      if ($(this).val() == '') {
        bool = false;
      }
    });

    if (bool == true) {
      evt.preventDefault();
      DisplayTable();
    }
  });

  /*
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
    htmlBuffer += "<tr>";
    htmlBuffer += "<td></td>";
    for (i = 0; i < colEnd; i++) { 
      htmlBuffer += '<td> <input type="text" class="c'+ (i+1) +'_col_value" name="colum" value="' + colum[i] + '"maxlength="4" size="1" required></td>';
    }
    htmlBuffer += "</tr>";
    for (i = 0; i < rowEnd; ++i) {
      /* add a opening table row tag to the buffer */
      htmlBuffer += '<tr><td>';
      htmlBuffer += '<input type="text" class="r' + (i + 1) + '_row_value" name="row" value="' + row[i] + '" maxlength="4" size="1" required/></td>';

      /* add a table cell with the multiplication inside it to the buffer */
      for (var j = 0; j < colEnd; ++j) {
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

});
