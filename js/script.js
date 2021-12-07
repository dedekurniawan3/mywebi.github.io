// paralax
$(window).scroll(function(){

    var wscroll = $(this).scrollTop();

    // Jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wscroll/5.8  +'%'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wscroll/2.5  +'%'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wscroll/2.5  +'%'
    });




    //Portfolio
    if ( wscroll > $('.portfolio').offset().top - 250 ) {
        $('.portfolio .thumbnail').addClass('muncul');
    }

});