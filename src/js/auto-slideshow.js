$('.CoverFeatures > div:gt(0)').hide();

setInterval( function() {
	$(".CoverFeatures > div:first")
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo(".CoverFeatures");
}, 4000);
