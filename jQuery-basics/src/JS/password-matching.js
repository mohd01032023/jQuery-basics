$(function () {
    $("#main__confirm").keyup(function () {
        if ($('#main__password').val() == $(this).val()) {
            // If match
            $('p').css("color", "green");
            $('p').html("Passwords match")
        }
        else {
            $('p').css("color", "red");
            $('p').html("Passwords dont match")
        }
    });
})