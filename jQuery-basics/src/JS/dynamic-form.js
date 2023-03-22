let toAppend = '<div>\
    <input type="text" placeholder="Enter Class">\
    <input type="text" placeholder="Enter Board">\
    <input type="text" placeholder="Enter Marks">\
    <input type="text" placeholder="Enter Division">\
    <button type="button" class="add">+</button>\
    <button type="button" class="rem">-</button>\
    </div>'
    // We only have to append/remove this string

$(function () {
    $(document).on('click', '.add', function(){
        $(this).parent().parent().append(toAppend);
    })
    $(document).on('click', '.rem', function(){
        $(this).parent().remove();
    })
})