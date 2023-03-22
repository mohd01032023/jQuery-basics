let curr = 2;
$(function () {
    $("#main__prev").click( // Previous button 
        function () {
            if (curr == 0) {
                curr = 4
            } else {
                --curr;
            }
            $('img').attr("src", `./Images/${curr}.png`)
        }
    )

    $('#main__next').click( // Main button
        function () {
            curr = ++curr%5
            $('img').attr("src", `./Images/${curr}.png`)
        }
    )
})