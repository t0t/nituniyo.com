var $popupBtn = $('#contactBtn');
var $html = $('html');
var $close = $('#closeBtn');
var $popupDiv = $('.Contact--form');

$popupBtn.click(function(event) {
    event.preventDefault();
    $popupDiv.toggleClass("active");
    $html.addClass("overflow");
});

$close.click(function(event) {
    event.preventDefault();
    $html.removeClass("overflow");
    $popupDiv.removeClass("active");
});
