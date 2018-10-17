/* move slide Image*/
var value=0;
var x;
var urlImg;
var count=0;
var kiemTraSearch=0;
$(function(){
	$('.nutRight').click(function(){
		var getBanner=document.getElementById("banner");

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
		if(value != -900){
			value += -300;
			x= "translateX("+value+"px)";
			$('.slideChild').css('transform',x);
		}
		else{
			value=0;
			x="translateX("+value+"px)";
			$('.slideChild').css('transform',x);
		}
	})
});
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
			x= "translateX("+value+"px)";
			$('.slideChild').css('transform',x);
		}
		else{
			value=-900;
			x="translateX("+value+"px)";
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