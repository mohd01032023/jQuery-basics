let purple = false;
// Purple denotes if element is purple. If not, it is maroon (alternating colors)

function changeColor() {
    if (purple == false) {
        $('.test').first('p').css("color", 'purple');
        $('.test').last('p').css("color", 'purple');
        purple = true;
    } else {
        $('.test').first('p').css("color", 'maroon');
        $('.test').last('p').css("color", 'maroon');
        purple = false;
    }
}
setInterval(changeColor, 5000);