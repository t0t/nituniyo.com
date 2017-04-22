var $popupBtn = $('#contactBtn');
var $popupDiv = $('.Contact--form');

var $aboutBtn = $('#aboutBtn');
var $popupAbout = $('.About');

var $html = $('html');
var $close = $('#closeBtn');
var $closeAbout = $('#closeAbout');

$popupBtn.click(function(event) {
    event.preventDefault();
    $popupDiv.toggleClass("active");
    $html.addClass("overflow");
});

$aboutBtn.click(function(event) {
    event.preventDefault();
    $popupAbout.toggleClass("active");
    $html.addClass("overflow");
});

$closeAbout.click(function(event) {
    event.preventDefault();
    $html.removeClass("overflow");
    $popupDiv.removeClass("active");
});

$close.click(function(event) {
    event.preventDefault();
    $html.removeClass("overflow");
    $popupDiv.removeClass("active");
});
