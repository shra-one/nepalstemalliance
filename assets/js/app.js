
AOS.init();

$(function(){
    $('.js-gallary-item').on('click', function(e){
        var currentSrc = e.currentTarget.currentSrc;
        var targetDiv = $('.product-gallary__featured');
        console.log(e)
        targetDiv.attr('src', currentSrc);
    })
})