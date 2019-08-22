var timer = setTimeout(function(){
    $('.wrapper').removeClass('init');
},200)
// $('.item').onclick = function(){
//     console.log(11);
//     $(this).addClass('active');
//     $('.wrapper').addClass('wrapper-active');

// }
$('.item').click(function () { 
    $(this).addClass('active');
    $('.wrapper').addClass('wrapper-active');
    
});
$('.close').click(function(e){
    e.stopPropagation();
    $('.wrapper').removeClass('wrapper-active');
    $('.active').removeClass('active');
})