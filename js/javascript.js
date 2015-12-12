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
    submitHandler: function (form) {
      theUrl = '/processData';
      var params = $(form).serialize();
      $.ajax({
        data: params,
        processData: false,
        async: false,
        success: function (returnData) {
          $('#errorTxt').html(returnData);
        }
      })
    }
  });
