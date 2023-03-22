let tbody = ""
$(function () {
    $('input').keyup(
        function () {
            let matches = getMatches($(this).val()) // Function defined in flowers.js
            tbody = ""; // Clear tbody
            for (x of matches) {
                tbody += `<tr><td>${x}</td></tr>`
            }
            $('tbody').html(tbody)
        }
    )
})