$('button').click(
    function () {
        if ($('#main__lname').val() == "") {
            alert("Some fields are blank");
            $('#main__lname').css("background-color", "red")
            $('#main__lname').focus();

            if($('#main__fname').val() != ""){ // Reset color where its not empty
                $('#main__fname').css("background-color", "")
            } 
        }
        if ($('#main__fname').val() == "") {
            alert("Some fields are blank");
            $('#main__fname').css("background-color", "red")
            $('#main__fname').focus();

            if($('#main__lname').val() != ""){ // Reset color where its not empty
                $('#main__lname').css("background-color", "")
            } 
        }
        if($('#main__lname').val() != "" && $('#main__fname').val() != ""){
            $('input').css("background-color", "") // Reset color if everything is fine
        }
    }
)