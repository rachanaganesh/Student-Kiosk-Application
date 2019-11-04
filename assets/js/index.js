$().ready(function () {
    // $("form").submit(function (e) {

    //     var data = $(this).serializeArray();
    //     console.log("In submit from");
    //     console.log(data);
    //     var display = document.getElementById("response");

    //     if(data[0].value == "" || data[1].value == ""){
            
    //         display.innerHTML = "Please Enter Username or Password";
    //         return false;
    //     }
    //     else{
 
    //         display.innerHTML = "";
    //     }


    //     $.get('view.php', function (res, textStatus, jqXHR) {
    //         console.log(res);


    //     });

    //     return false;
    // });

    $("#feedback-button").click(function() {
        location.href='feedback.html';
    });

    $("#find-button").click(function() {
        // localStorage.setItem('externalUrl', "https://asicsulb.org/corporate/resources/usu-directory");
        location.href='directory.html';
    });

    $("#different-button").click(function() {
        // localStorage.setItem('externalUrl', "pdf");
        // location.href='directory.html';
        location.href='map.html';

    });
});