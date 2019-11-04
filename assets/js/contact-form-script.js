$().ready(function () {

    var openModal = $('#commentTypeModal');

    var submitMessage = $("#msgSubmit");

    var feedBackForm = $('#contactForm');

    var department = $('#department');

    var foodService = $('#foodService');

    var additionalInteraction = $('#additionalInteraction');

    var commentType = $("#commentType");

    openModal.modal({ backdrop: "static" });



    var refresh;

    var resetInActivity = function () {

        if (!openModal.hasClass("show")) {

            clearInterval(refresh);

            refresh = setTimeout(function () {

                resetForm();

            }, 30000);

        };

    };



    $(document).on('keypress touch click mousemove scroll', function () { resetInActivity() });



    resetInActivity();



    $(".commentQuality").click(function () {

        var commentTypeVal = $(this).attr('data-id');

        commentType.val(commentTypeVal);

        openModal.modal('hide');

    });



    // Follow-Up Yes or No

    $("#yes, #no").change(function () {

        $("#phoneNumberTxt").toggle();
        $("#emailTxt").toggle();

    });



    // Comment not more than 300 characters

    $("#comment").on("input", function () {

        var maxlength = $(this).attr("maxlength");

        var currentLength = $(this).val().length;

        var numOfCharacters = $("#numOfCharacters");



        if (currentLength <= maxlength) {

            numOfCharacters.html(maxlength - currentLength + " chars left");

        }

    });



    // Adding '-' in Phone number

    $('#phoneNumber').keydown(function (e) {

        var key = e.charCode || e.keyCode || 0;

        $text = $(this);

        if (key !== 8 && key !== 9) {

            if ($text.val().length === 3) {

                $text.val($text.val() + '-');

            }

            if ($text.val().length === 7) {

                $text.val($text.val() + '-');

            }

        }

        return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));

    });





    $('#feedbackAbout').change(function () {

        if ($(this).val() == "department-office") {
            department.show();
            foodService.hide();
            additionalInteraction.hide();
        }
        else if ($(this).val() == "food-services") {
            foodService.show();
            department.hide();
            additionalInteraction.hide();

        }
        else if($(this).val() == "staff-Interaction") {
            additionalInteraction.show();
            department.hide();
            foodService.hide();
        }
        else {
            $('#department option:selected').removeAttr('selected');
            $('#foodService option:selected').removeAttr('selected');
            $('#additional-Interaction').val('');
            department.hide();
            foodService.hide();
            additionalInteraction.hide();
        }

    });



    feedBackForm.validator().on("submit", function (e) {

        if (e.isDefaultPrevented()) {

            showErrorMessage("Please ensure all required fields (*) are filled.");

        } else {

            e.preventDefault();

            submitForm();

        }

    });



    function submitForm() {
        var submission = feedBackForm.serialize();

        $.ajax({

            type: "POST",

            url: "form-process.php",

            data: submission,

            success: function (data, textStatus, jqXHR) {
                console.log(data);

                showSuccessMessage("Thank you for your feedback! Someone from our team will reach out to you if chosen to be contacted. Go Beach!");

            },

            error: function (jqXHR, textStatus, errorThrown) {

                showErrorMessage("We've encountered an error during submission. We apologize for the inconvenience.");

            }

        });

    }



    function showSuccessMessage(msg) {

        feedBackForm.hide();

        submitMessage.removeClass().addClass("h3 text-center text-success").text(msg);

        submitMessage.show();

        setTimeout("location.href = 'index.html';",5000);

    }



    function showErrorMessage(msg) {

        submitMessage.removeClass().addClass("h3 text-center text-danger").text(msg);

        submitMessage.show();

    }



    function resetForm() {

        submitMessage.hide();

        feedBackForm.removeClass('was-validated');

        feedBackForm[0].reset()

        $('#phoneNumberTxt').hide();
        $('#emailTxt').hide();


        // openModal.modal({ backdrop: "static" });

        feedBackForm.show();

        window.location.href = "index.html";
    }
});