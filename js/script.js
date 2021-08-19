var d = new Date();
var n = d.getFullYear();
document.getElementById('date').innerHTML = n.toString();
$('.d-block').on('click', function () {
   $('#full-img-prev').removeClass('hide');
   $('#full-img-prev').addClass('show');
   $('#img-show').html(`<img src="`+$(this).attr('src')+`" class="d-block mx-auto img-prev" style="width: 85%; height: 85%;" alt="...">`);
});
$('#close-prev').on('click', function () {
    $('#full-img-prev').removeClass('show');
    $('#full-img-prev').addClass('hide');
});
$('.nav-link').on('click', function (e) { 
    e.preventDefault();
    $('.nav-link').removeClass('border-3 border-bottom fw-bold text-dark border-dark pb-1');
    $(this).addClass('border-3 border-bottom fw-bold text-dark border-dark pb-1');
    var thisAttrHref = $(this).attr('href');
    var thisAttrHrefOffset = $(thisAttrHref).offset().top;
    $('html').animate({scrollTop:thisAttrHrefOffset}, 100, 'swing');
});
$('.navbar-brand').on('click', function (e) {
    e.preventDefault();
    $('.nav-link').removeClass('border-3 border-bottom fw-bold text-dark border-dark pb-1');
    var thisAttrHref = $(this).attr('href');
    var thisAttrHrefOffset = $(thisAttrHref).offset().top;
    $('html').animate({scrollTop:thisAttrHrefOffset}, 100, 'swing');
});
$(window).scroll(function () { 
    $('.contentnya').each(function () { 
        var contentTop = $(this).offset().top;
        if($(document).scrollTop() > contentTop-10){
             var thisId = $(this).attr('id');
             $('.contentnya').removeClass('active');
             activeId = $(this).addClass('active');
        }
        if($(document).scrollTop() === 0){
            $('.nav-link').removeClass('border-3 border-bottom fw-bold text-dark border-dark pb-1');
        }
    });
    $('.nav-link').each(function(){
        thisHref = $(this).attr('href');
        if(thisHref === ('#'+$('.active').attr('id'))){
            $('.nav-link').removeClass('border-3 border-bottom fw-bold text-dark border-dark pb-1');
            $(this).addClass('border-3 border-bottom fw-bold text-dark border-dark pb-1');
        }
        if(($(window).innerHeight() + $(window).scrollTop()) >= $("body").height()){
            $('.nav-link').removeClass('border-3 border-bottom fw-bold text-dark border-dark pb-1');
            $('#contact-link').addClass('border-3 border-bottom fw-bold text-dark border-dark pb-1');     
        }
    });
});
window.onload = function (){
    var offset = $('#home').offset().top;
    $('html').animate({scrollTop:offset}, 100, 'swing');
}