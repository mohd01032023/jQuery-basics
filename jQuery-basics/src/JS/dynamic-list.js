$(function(){
    $(document).on('click', 'button', function(){
        let toAdd = "<ul>" + $(this).parent().parent().html() + "</ul>";
        $(this).parent().parent().parent().append(toAdd);
    })
})
