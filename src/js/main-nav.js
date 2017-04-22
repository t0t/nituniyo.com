
let menu = $(".siteNavigation ul");
let menuIcon = $("#hamenu");

menuIcon.click( function () {
	menu.toggleClass("overlayMenu");
	$(this).val("Menu");
	$(this).toggleClass("active");
	if ($(this).hasClass("active")) {
		$(this).val("Close");
	}
});
