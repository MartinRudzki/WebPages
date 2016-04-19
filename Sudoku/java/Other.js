/*
 File: ~Sudoku/java/Other.js
 Edit by: Martin Rudzk, UMass Lowell, GUI Programming 2
 Email: Martin_Rudzki@student.uml.edu
 CopyRight (c) 2016 by Martin Rudzki. You are free to use any of my code here.
 Description: None of this code deals with the gameboard.
 Created: MR 03/13/2016
 */

$(document).ready(function () {


  $(function () {
    //Store frequently elements in variables
    if ($(this).hasClass('slider')){
    
    var slider = $(this).hasClass('slider');

    //Call the Slider
    slider.slider({
      //Config
      range: "min",
      min: 0,
      value: 0,


      //Slider Event
      slide: function (event, ui) { //When the slider is sliding
      //Increase/decrease sound
      setVolume((ui.value) / 100);

        // Volume meter transition
        var value = slider.slider('value'),
          volume = $('.volume');
        if (value <= 1) {
          volume.css('background-position', '0 -5px');
        }
        else if (value <= 50) {
          volume.css('background-position', '0 -44px');
        }
        else if (value <= 75) {
          volume.css('background-position', '0 -83px');
        }
        else {
          volume.css('background-position', '0 -122px');
        };
      },
    });

  });
}

  var myMedia = document.createElement('audio');
  document.getElementById('#player');
  $('#player').append(myMedia);
  myMedia.id = "myMedia";
  playAudio('sounds/RainforestSounds.mp3', 0);

  function playAudio(fileName, myVolume) {
    myMedia.src = fileName;
    myMedia.setAttribute('loop', 'loop');
    setVolume(myVolume);
    myMedia.play();
  }

  function setVolume(myVolume) {
    var myMedia = document.getElementById('myMedia');
    myMedia.volume = myVolume;
  }


    /*
     Code found at:
     http://css3.bradshawenterprises.com/cfimg/
     Martin_Rudzki@student.uml.edu
     Created: 3/13/2016
     
     What does it do? 
     Switching between backgrounds
     
     How?
     In HTML all background images are loaded when accessing webpage. When you select a new
     background the class "opaque" is removed from the current image and then added to the
     image you selected. Basically removeing the CSS from one photo and adding it to another.
     */
    $("#cf7_controls").on('click', 'span', function () {
        $("#cf7 img").removeClass("opaque");
        var newImage = $(this).index();
        $("#cf7 img").eq(newImage).addClass("opaque");
        $("#cf7_controls span").removeClass("selected");
        $(this).addClass("selected");
    });

    /*
     Code found at:
     http://stackoverflow.com/questions/21524210/jquery-only-one-drop-down-menu-opened-at-a-time
     Martin_Rudzki@student.uml.edu
     Created: 3/17/2016
     
     What does it do? 
     Toggels drop down menu
     
     How?
     Once clicked on the menu item you want. It then grabs all of the menu sibling "ul" elements and 
     sees if they are hidden. If the one you clicked on is hidden then add a class "open" and toggle
     the menu down. The next time you go back into the if statement it will hide all "open" class elements
     and again toggle the one you seleced.
     */
    $("a.drop_down").click(function () {
        var $ul = $(this).siblings("ul");
        if ($ul.is(":hidden")) {
            $('.open').hide();
            $ul.addClass('open').slideToggle();
        }
        /*If you click on your slef, then close your menu.*/
        else {
            $ul.hide();
        }
    });


  // Code found at: http://stackoverflow.com/questions/152975/how-to-detect-a-click-outside-an-element
  // Makes it so that: When you click outside of the dropdown it closes, but if you click inside the dropdown it stays open
  $(document).click(function (event) {
      var $ul = $('a.drop_down').siblings('ul');

      if (!$(event.target).closest($ul).length && //If we clicked and the target was not inside the dropdown: hide the drop down
              !$(event.target).is('a.drop_down')) {
          if ($ul.is(":visible")) {
              $ul.hide();
          }
      }
  });


  $(".fade").animate({
      transform: 'scale(1.1)',
  });


  $("#solve").trigger('mouseenter');
  /* Michael please comment code*/
  var game = Sudoku.getInstance();
  $('#container').append(game.getGameBoard());
  $('#solve').click(function () {
      game.solve();
  });
  $('#validate').click(function () {
      game.validate();
  });
  $('#reset').click(function () {
      game.reset();
  });
  $('#EasyButton').click(function () {
      game.reset();
      EasyClicked();
  });
  $('#MediumButton').click(function () {
      game.reset();
      MediumClicked();
  });
  $('#HardButton').click(function () {
      game.reset();
      HardClicked();
  });
  $('#ExpertButton').click(function () {
      game.reset();
      ExpertClicked();
  });
  /*
  var sound = $("#beach_audio")[0];
  sound.play();
  */
});//(document).ready
