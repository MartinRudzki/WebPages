/*
 File: ~Sudoku/java/Other.js
 Edit by: Martin Rudzk, UMass Lowell, GUI Programming 2
 Email: Martin_Rudzki@student.uml.edu
 CopyRight (c) 2016 by Martin Rudzki. You are free to use any of my code here.
 Description: None of this code deals with the gameboard.
 Created: MR 03/13/2016
 */

$(document).ready(function () {
  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }

  function currentDiv(n) {
    showDivs(slideIndex = n);
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
  }

});//(document).ready

