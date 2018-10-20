/* move slide Image*/
var value=0,count=0,kiemTraSearch=0;
var x,urlImg;
$(function(){
	$('.nutRight').click(function(){
		var getBanner=document.getElementById("banner");
		var getSlide = document.getElementsByClassName("slideChild");
		/* banner */
		if(count!=3){
			count++;
			urlImg="url(resources/images/home_bg"+count+".jpg) center center / cover no-repeat";
			$('#banner').css('background',urlImg);
			console.log(count);
		}
		else if(count == 3){
			count=0;
			urlImg="url(resources/images/home_bg.jpg) center center / cover no-repeat";
			$('#banner').css('background',urlImg);
			console.log(count);
		}
		/*end banner*/
		/*slide*/
		if(value != -900){
			value += -300;
			x= "translateX("+value+"px) scale(0.9)";
			$('.slideChild').css('transform',x);
		}
		else{
			value=0;
			x="translateX("+value+"px) scale(0.9)";
			$('.slideChild').css('transform',x);

		}
		/*end slide*/
	})
});

/* menu scroll*/
$(function(){
	$(window).scroll(function(event) {
		var vitri=$("html").scrollTop();
		console.log(vitri);
		if(vitri > 90){
			$('.allMenu').addClass('allMenuZoom');
			$('.menu').addClass('menuZoom');
			$('.searchBar').addClass('searchZoom');
		}
		else if(vitri < 100){
			$('.allMenu').removeClass('allMenuZoom');
			$('.menu').removeClass('menuZoom');
			$('.searchBar').removeClass('searchZoom');
		}
	});
})
/* end menu scroll */

/* hover slide*/
$(function(){
	$('.slideChild').hover(function(){
		x= "translateX("+value+"px) scale(1)";
		$(this).css('transform',x);
	},function(){
		x= "translateX("+value+"px) scale(0.9)";
		$(this).css('transform',x);
	})
})
/* end hover*/
$(function(){

	$('.nutLeft').click(function(){
		if(count!=0){
			count--;
			if(count ==0){urlImg="url(resources/images/home_bg.jpg) center center / cover no-repeat";}
			else{urlImg="url(resources/images/home_bg"+count+".jpg) center center / cover no-repeat";}	
			$('#banner').css('background',urlImg);
			console.log(count);
		}
		else if(count == 0){
			count=3;
			urlImg="url(resources/images/home_bg3.jpg) center center / cover no-repeat";
			$('#banner').css('background',urlImg);
			console.log(count);
		}
		if(value != 0){
			value += 300;
			x= "translateX("+value+"px) scale(0.9)";
			$('.slideChild').css('transform',x);
		}
		else{
			value=-900;
			x="translateX("+value+"px) scale(0.9)";
			$('.slideChild').css('transform',x);
		}
	})
});
/* end move slide Image*/
/* show search bar*/
$(function(){
	$('.searchIcon').click(function(){
		var temp=1;
		if(kiemTraSearch == 0){
			$('.searchBar').removeClass("hideSearchBar");
			$('.searchBar').addClass("showSearchBar");
			kiemTraSearch=temp;
		}
		else{
			$('.searchBar').removeClass("showSearchBar");
			$('.searchBar').addClass("hideSearchBar");
			temp -=1;
			kiemTraSearch =temp;
		}
	});
});
/* end search bar*/
/* content movie*/
$(function(){
	$('.catetory ul li a').click(function(){
		$('.catetory ul li a').removeClass('vien');
		$(this).addClass('vien');
		var movieIndex=$('.catetory ul li a').index(this);
		$('.cateMove').removeClass('movieActive');
		$('.cateMove').removeClass('movieLeft');
		$('.cateMove').removeClass('movieRight');
		if(movieIndex == 0){
			$('.cateMove:nth-child('+(movieIndex+1)+')').addClass('movieActive');
			$('.cateMove:nth-child('+(3)+')').addClass('movieLeft');
			$('.cateMove:nth-child('+(movieIndex+1)+')').addClass('movieRight');
		}
		$('.cateMove:nth-child('+(movieIndex+1)+')').addClass('movieActive');
		$('.cateMove:nth-child('+(movieIndex)+')').addClass('movieLeft');
		$('.cateMove:nth-child('+(movieIndex+1)+')').addClass('movieRight');

	})
})
/* end content movie*/
/* lich chieu*/
$(function(){
	$('.day ul li').click(function(){
		$('.day ul li').css('color','#928e8e');
		$(this).css('color','#fff');
		var indexDay=$('.day ul li').index(this);
		$('.blockLichMovie .lichMovies').removeClass('showInfoMovie');
		$('.blockLichMovie .lichMovies:nth-child('+(indexDay+1)+')').addClass('showInfoMovie');
		console.log(indexDay);
	})
})

$(function(){
	$('.tenRap ul li').click(function(){
		$('.tenRap ul li').css('color','#928e8e');
		$(this).css('color','#fff');

	})
})
/* end lich chieu*/