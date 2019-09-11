$(document).ready(function(){
   // $('#seeMore').fadeIn('slow');

    $("#welcome").delay(200).fadeIn('slow');
    $("#toMyPage").delay(1000).fadeIn('slow');
    $("#topMenu").delay(1500).fadeIn('slow');
    $('#seeMore').delay(2000).fadeIn('slow');

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

// Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    })

// Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

});




