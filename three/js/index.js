$(function(){
	$('.menu-top ul li').mouseover(function(){
		var index = $(this).index();
		$('.firstOne').stop().animate({marginLeft:index* '85' + 'px'},300)
		$(this).css({color:'white'}).siblings().css({color:'black'})
	})
	$('.menu-top ul li').mouseleave(function(){
		$('.firstOne').stop().animate({marginLeft:0 + 'px'})
		$(this).css({color:'black'});
	})

	var mySwiper = new Swiper('.swiper-container', {
	autoplay: 2000,
})
})