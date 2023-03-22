$(function () {
    $('#main__odd').click(function () {
        $('tr:odd').css("background-color", "LightGrey");
    })
    $('#main__even').click(function () {
        $('tr:even').css("background-color", "DodgerBlue");
    })
})