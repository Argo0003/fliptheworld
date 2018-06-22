$(function() {

 $('.logo-litera').each(function() {
	var ths = $(this);
	ths.html(ths.html().replace('the', '<span>the</span>'));
 });

 $('.search').click(function(){
	$('.search-field').stop().slideToggle();
	$('.search-field input[type=text]').focus();
 });

 $(document).keyup(function(e) {
	 if (e.keyCode == 27) {
		$('.search-field').slideUp();
	 }
 }).click(function() {
	$('.search-field').slideUp();
 });
 $('.search-wrap').click(function(e) {
	 e.stopPropagation();
 });

 $('.top-line').after('<div class="mobile-menu d-lg-none">');
 $('.top-menu').clone().appendTo('.mobile-menu');
 $('.mobile-menu-button').click(function() {
	$('.mobile-menu').stop().slideToggle();
 });

 $("body").prognroll({
	height: 3,
	color: "#df3167", //#3E131C
	custom: false
});

	$('.main-menu li').removeClass('active');
	var path = window.location.pathname;
	$('.main-menu li a').each(function() {
		var href = $(this).attr('href');
		if(
			(path === href) ||
			(path.slice(1).substring(0, href.length) === href)
		) {
			$(this).parent('li').addClass('active');
		}
	});

	$(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });
    $('.scroll-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

});
