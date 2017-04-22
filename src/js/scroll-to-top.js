var $topButton = $('.scrollToTop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 2000) {
        $topButton.addClass("active");
    } else {
		$topButton.removeClass("active");
    }
});


function scrolltop() {
    $('html, body').animate({
        scrollTop: 0
    }, 400);
}
