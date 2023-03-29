$(function(){
    $(document).on('click', 'button', function(){
        let newItem = $('input').val().trim(); // Remove end whitespaces
        if(newItem != "" && /^[a-zA-Z0-9\s]+$/.test(newItem)){
            $(this).parent().children('ul').append(`<li>${newItem}<button type="button">+</button> <ul></ul> </li>`)
        } else {
            alert("Please enter a valid category/subcategory")
        }
    })
})
