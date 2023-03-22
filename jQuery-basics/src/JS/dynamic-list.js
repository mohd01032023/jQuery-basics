$(function(){
    $(document).on('click', 'button', function(){
        // Works for all buttons
        let newItem = $('input').val();
        if(newItem == ""){ // If Input field was empty
            alert("Input feild is empty");
        } else{
            $(this).parent().append(`<li>${newItem}<button type="button">+</button></li>`);
        }
    })
})