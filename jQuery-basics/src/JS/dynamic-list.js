const items = {
    "cloths" : new Set(['t-shirts', 'trousers']),
    "electronics": new Set(['mobiles', 'tabs'])
}

function validate(type, item, category = null){
    if(!/^[a-zA-Z0-9\s]+$/.test(item) || item == ""){ // A category should have only numbers and letters
        alert("Please enter a valid name");
        return false;
    }

    item = item.toLowerCase().replace(/\s/g, "")
    // Make it case and whitespace agnostic. Since everything is displayed as user
    // inputted but stored in lowercase

    if(type=='cat'){ // If category. category parameter will not be used here
        if((item in items) == true){
            alert("That category already exists");
            return false;
        }
        return true;
    } else { // If subcategory
        if(items[category].has(item)){
            alert("That sub category already exists");
            return false;
        }
        return true;
    }
}

$(function(){
    $(document).on('click', '.category', function(){
        let newItem = $('input').val().trim(); // Remove end whitespaces
        if(validate('cat', newItem) == true){
            $(this).parent().append(`<li>${newItem}<button type="button" class="category">+</button></li>`);
            // Display to user as s/he inputted
            items[newItem.toLowerCase().replace(/\s/g, "")] = new Set([]);
            // But store as lowercase
        }
    })

    $(document).on('click', '.sub-cat', function(){
        let newItem = $('input').val().trim(); // Remove end whitespaces
        if (validate('sub-cat', newItem, $(this).parent().attr('class'))) {
            $(this).parent().append(`<li class="${$(this).parent().attr('class')}">${newItem}<button type="button" class="sub-cat">+</button></li>`)
            items[$(this).parent().attr('class')].add(newItem.toLowerCase().replace(/\s/g, ""))
        }
    })    
})
