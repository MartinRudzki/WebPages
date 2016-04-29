/*
 File: ~Sudoku/java/Other.js
 Developers: Dylan Wetherald, Martin Rudzki, and Michael Bejaniance
 Class: UMass Lowell, GUI Programming 2
 Email: Dylan_Wetherald@student.uml.edu, Martin_Rudzki@student.uml.edu, Michael_Benjaniance@student.uml.edu
 CopyRight (c) 2016. You are free to use any of our code here.
 Description: None of this code deals with the game board.
 Created: by MR 03/13/2016
 */

$(document).ready(function () {


  $(".slider").each(function () {
    //Store frequently elements in variables

    var slider = $('.slider');

    //var value = slider.slider('value');
  

    //Call the Slider
    slider.slider({
      //Config
      range: "min",
      min: 0,
      max: 100,
      value: 0,

      //Slider Event
      slide: function (event, ui) { //When the slider is sliding
        //Increase/decrease sound
        setVolume((ui.value) / 100);

        // Volume meter transition
        var value = slider.slider('value');
     
        volume = $('.volume');    
           
        if (value <= 1) {
          volume.css('background-position', '0 -5px');
        }
        else if (value <= 25) {
          volume.css('background-position', '0 -44px');
        }
        else if (value <= 50) {
          volume.css('background-position', '0 -83px');
        }
        else {
          volume.css('background-position', '0 -122px');
        };
      },
    });
    var myMedia = document.createElement('audio');
    $('#player').append(myMedia);
    myMedia.id = "myMedia";
    playAudio('sounds/BeachSounds.mp3', 0);
  });

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

 
  $(".slider1").each(function () {
    //Store frequently elements in variables

    var slider = $('.slider1');

    //var value = slider.slider('value');


    //Call the Slider
    slider.slider({
      //Config
      range: "min",
      min: 0,
      max: 100,
      value: 0,

      //Slider Event
      slide: function (event, ui) { //When the slider is sliding
        //Increase/decrease sound
        setVolume1((ui.value) / 100);

        // Volume meter transition
        var value = slider.slider('value');

        volume = $('.volume1');

        if (value <= 1) {
          volume.css('background-position', '0 -5px');
        }
        else if (value <= 25) {
          volume.css('background-position', '0 -44px');
        }
        else if (value <= 50) {
          volume.css('background-position', '0 -83px');
        }
        else {
          volume.css('background-position', '0 -122px');
        };
      },
    });
    var myMedia1 = document.createElement('audio');
    $('#player1').append(myMedia1);
    myMedia1.id = "myMedia1";
    playAudio1('sounds/RainforestSounds.mp3', 0);
  });

  function playAudio1(fileName, myVolume) {
    myMedia1.src = fileName;
    myMedia1.setAttribute('loop', 'loop');
    setVolume1(myVolume);
    myMedia1.play();
  }

  function setVolume1(myVolume) {
    var myMedia = document.getElementById('myMedia1');
    myMedia.volume = myVolume;
  }

  $(".slider2").each(function () {
    //Store frequently elements in variables

    var slider = $('.slider2');

    //var value = slider.slider('value');


    //Call the Slider
    slider.slider({
      //Config
      range: "min",
      min: 0,
      max: 100,
      value: 0,

      //Slider Event
      slide: function (event, ui) { //When the slider is sliding
        //Increase/decrease sound
        setVolume2((ui.value) / 100);

        // Volume meter transition
        var value = slider.slider('value');

        volume = $('.volume2');

        if (value <= 1) {
          volume.css('background-position', '0 -5px');
        }
        else if (value <= 25) {
          volume.css('background-position', '0 -44px');
        }
        else if (value <= 50) {
          volume.css('background-position', '0 -83px');
        }
        else {
          volume.css('background-position', '0 -122px');
        };
      },
    });
    var myMedia2 = document.createElement('audio');
    $('#player2').append(myMedia2);
    myMedia2.id = "myMedia2";
    playAudio2('sounds/RainSound.mp3', 0);
  });

  function playAudio2(fileName, myVolume) {
    myMedia2.src = fileName;
    myMedia2.setAttribute('loop', 'loop');
    setVolume2(myVolume);
    myMedia2.play();
  }

  function setVolume2(myVolume) {
    var myMedia = document.getElementById('myMedia2');
    myMedia.volume = myVolume;
  }

  $(".slider3").each(function () {
    //Store frequently elements in variables

    var slider = $('.slider3');

    //var value = slider.slider('value');


    //Call the Slider
    slider.slider({
      //Config
      range: "min",
      min: 0,
      max: 100,
      value: 0,

      //Slider Event
      slide: function (event, ui) { //When the slider is sliding
        //Increase/decrease sound
        setVolume3((ui.value) / 100);

        // Volume meter transition
        var value = slider.slider('value');

        volume = $('.volume3');

        if (value <= 4) {
          volume.css('background-position', '0 -5px');
        }
        else if (value <= 25) {
          volume.css('background-position', '0 -44px');
        }
        else if (value <= 50) {
          volume.css('background-position', '0 -83px');
        }
        else {
          volume.css('background-position', '0 -122px');
        };
      },
    });
    var myMedia3 = document.createElement('audio');
    $('#player3').append(myMedia3);
    myMedia3.id = "myMedia3";
    playAudio3('sounds/thunder1.mp3', 0);
  });

  function playAudio3(fileName, myVolume) {
    myMedia3.src = fileName;
    myMedia3.setAttribute('loop', 'loop');
    setVolume3(myVolume);
    myMedia3.play();
  }

  function setVolume3(myVolume) {
    var myMedia = document.getElementById('myMedia3');
    myMedia.volume = myVolume;
  }
  /*
   Code found at:
   http://css3.bradshawenterprises.com/cfimg/
   
   What does it do? 
   Switching between backgrounds
   
   How?
   In HTML all background images are loaded when accessing the webpage. When you select a new
   background the class "opaque" is removed from the current image and then added to the
   image you selected. Basically removing the CSS from one photo and adding it to another.
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
   
   What does it do? 
   Toggels drop down menu
   
   How?
   Once you click on the menu item you want it grabs all of the menu sibling "ul" elements and 
   sees if they are hidden. If the one you clicked on is hidden then add a class "open" and toggle
   the menu down. The next time you go back into the "if" statement it will hide all "open" class elements
   and again toggle the one you selected.
   */
  $("a.drop_down").click(function () {
    var $ul = $(this).siblings("ul");
    if ($ul.is(":hidden")) {
      $('.open').hide();
      $ul.addClass('open').slideToggle();
    }
      /*If you click on yourself, then close your menu.*/
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
  
  var game = Sudoku.getInstance();
  $('#container').append(game.getGameBoard()); //add the game board to the page

  // only numbers allowed in game board
  // credit to https://snipt.net/GerryEng/jquery-making-textfield-only-accept-numeric-values/
  $("#container").keydown(function (event) {
    // Allow only backspace and delete
    if (event.keyCode == 46 || event.keyCode == 8) {
      // let it happen, don't do anything
    }
    else {
      // Ensure that it is a number and stop the keypress
      if (event.keyCode < 48 || event.keyCode > 57) {
        event.preventDefault();
      }
    }
  });

  $('#login').click(function () {
	document.getElementById('currentuser').innerHTML = document.getElementById('Username2').value;
	});
	
	$('#logout').click(function () {
	document.getElementById('currentuser').innerHTML = "Logged out";
	});
	
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
});//(document).ready

