const dbag = {
    small: 1000,
    medium: 2000,
    large: 3000
} // Duffle bag prices

const tshirt = {
    grey: 1200,
    black: 1500,
    blue: 1700
} // Tshirt prices

$(function () {
    $('#main__dbag').change(function () {
        $('#main__dbag--price').html(dbag[$(this).val()]) 
        // Get size of dbag, corresponding cost and update inner content
    })

    $('#main__tshirt').change(function () {
        $('#main__tshirt--price').html(tshirt[$(this).val()])
        // Get color of tshirt, corresponding cost and update inner content
    })
})