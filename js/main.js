$(window).load(function() {
	mobile.init();
});

var mobile = {
	init:function(){
		FastClick.attach(document.body);
		//console.log($('#logoBox ').html())
		setInterval(function(){

			$('#logoBox > a:visible').fadeOut(500, function(){
				
				$(this).siblings().fadeIn(500);

			});
		}, 5000);
		//menu
		$(".menu-btn").bind('click', function(event) {
			event.preventDefault();
			if($("nav").hasClass('on')) return;
			$("nav").addClass('on');
			$(".wrap").transition({ x: '-350px' },function(){
				
				$(".wrap").one('click', function(event) {
					$("nav").removeClass('on');
					$(this).transition({ x: '0' });
					
				});
			});
		});	

		//首页内容自适应
		if($(".index").length>0){
			mobile.reSize();
			$(".box").delay(3000).fadeOut(300)
		}

		//功能亮点一级页面 
		$('.pattern .swiper-pagination span:nth-child(1)').append("<a href='#' onClick='_gaq.push(['_trackPageview', '\\virtual\\m\\2008mb\\product_road']);'>")
		$('.pattern .swiper-pagination span:nth-child(2)').append("<a href='#' onClick='_gaq.push(['_trackPageview', '\\virtual\\m\\2008mb\\product_mud']);'>")
        $('.pattern .swiper-pagination span:nth-child(3)').append("<a href='#' onClick='_gaq.push(['_trackPageview', '\\virtual\\m\\2008mb\\product_sandy']);'>")
        $('.pattern .swiper-pagination span:nth-child(4)').append("<a href='#' onClick='_gaq.push(['_trackPageview', '\\virtual\\m\\2008mb\\product_snow']);'>")
        //功能亮点二级页面
        $('.feature .swiper-pagination span:nth-child(1)').append("<a href='#' onClick='_gaq.push(['_trackPageview', '/virtual/m/2008mb/product_t_tstt']);'>T+STT<br />高效动力")
		$('.feature .swiper-pagination span:nth-child(2)').append("<a href='#' onClick='_gaq.push(['_trackPageview', '/virtual/m/2008mb/product_t_sunroof']);'>全景天幕<br />玻璃顶")
        $('.feature .swiper-pagination span:nth-child(3)').append("<a href='#' onClick='_gaq.push(['_trackPageview', '/virtual/m/2008mb/product_t_space']);'>星际宇航<br />驾驶空间")
        $('.feature .swiper-pagination span:nth-child(4)').append("<a href='#' onClick='_gaq.push(['_trackPageview', '/virtual/m/2008mb/product_t_touch']);'>触控智能<br />系统")
        $('.feature .swiper-pagination span:nth-child(5)').append("<a href='#' onClick='_gaq.push(['_trackPageview', '/virtual/m/2008mb/product_t_safe']);'>安全<br />装备")
        
	},
	reSize:function(){
		$(window).resize(function(event) {
			$(".content").height($(".wrap").height()-151);
		});
		$(".content").height($(".wrap").height()-151);
	}
}
$(function(){
	var rayed = $('#rayed');
	var flag = 1 ;
	rayed.click(function(event) {
		if(flag==1){
		    $("<div class='layout layout01'><a href='intro.html#slide05' onClick='_gaq.push(['_trackPageview', '\\virtual\\m\\2008mb\\product_m_safe']);'><p>安全</p><p>装备</p></a></div><div class='layout layout02'><a href='intro.html#slide04' onClick='_gaq.push(['_trackPageview', '\\virtual\\m\\2008mb\\product_m_touch']);'><p>触控智能</p><p>系统</p></a></div><div class='layout layout03'><a href='intro.html#slide03' onClick='_gaq.push(['_trackPageview', '\\virtual\\m\\2008mb\\product_m_space']);'><p>星际宇航</p><p>驾驶空间</p></a></div><div class='layout layout04'><a href='intro.html#slide01' onClick='_gaq.push(['_trackPageview', '\\virtual\\m\\2008mb\\product_m_tstt']);'><p>T+STT</p><p>高效动力</p></a></div><div class='layout layout05'><a href='intro.html#slide02' onClick='_gaq.push(['_trackPageview', '\\virtual\\m\\2008mb\\product_m_sunroof']);'><p>全景天幕</p><p>玻璃顶</p></a></div>").insertBefore('.layout06');
		        $('.nav-icon').remove();
		        $('.layout01').click(function(){
		        	
		        });
		    flag = 2;
	    }
	    else if(flag==2){
	    	$('.layout04').remove();
	    	$('.layout05').remove();
	    	$('.layout03').remove();
	    	$('.layout02').remove();
	    	$('.layout01').remove();
	    	$("<img src='img/nav.png' class='nav-icon'>").appendTo('.rayed');
	    	flag = 1;
	    }
	});
})