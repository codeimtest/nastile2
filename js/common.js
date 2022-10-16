AOS.init({
  duration: 600,
  easing: 'fade',
	once: true
});

var rellax = new Rellax('.rellax');
//toggle header
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	 //>=, not <=
	if (scroll >= 100) {
			//clearHeader, not clearheader - caps H
			$("header").addClass("toggle-header");
	} else{
		$("header").removeClass("toggle-header");
	}
}); //missing );


$('.contact').click(function(e){
	$('.for-contact').addClass('active');
	$('body').addClass('lock');
	e.preventDefault();
});
$('.to-map').click(function(e){
	$('.for-map').addClass('active');
	$('body').addClass('lock');
	e.preventDefault();
});
$('.to-certificate').click(function(e){
	$('.for-certificate').addClass('active');
	$('body').addClass('lock');
	e.preventDefault();
});
$('.btn-close').click(function(){
	if ($(this).parent().parent().parent().hasClass("active")) {
		$(this).parent().parent().parent().removeClass("active");
		$('body').removeClass('lock');
	} else {
		$('body').removeClass('lock');
	}

})
$(document).mouseup(function (e) {
	var container = $(".popup-dialog");
	if (container.has(e.target).length === 0){
			$('.popup').removeClass('active');
			$('body').removeClass('lock');
	}
});
$(".phone").mask("+7(999) 999-9999");

$('.get-video').magnificPopup({
	delegate: 'a',
	type: 'iframe',
	closeOnContentClick: false,
	closeBtnInside: false,
	mainClass: 'mfp-with-zoom mfp-img-mobile',
	image: {
			verticalFit: true,
	},
}); 

$('.open-map').magnificPopup({
	type:'image'});