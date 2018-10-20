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
/*Move tab*/
var buttons = document.getElementsByClassName('tablinks');
var contents = document.getElementsByClassName('tab_1');
$(function(){
function showContent(id){
		for (var i = 0; i < contents.length; i++) {
			contents[i].style.display = 'none';
		}
		var content = document.getElementById(id);
		content.style.display = 'block';
	}
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function(){
			var id = this.textContent;
			for (var i = 0; i < buttons.length; i++) {
				buttons[i].classList.remove("active");
			}
			this.className += " active";
			showContent(id);
		});
	}
	showContent('LỊCH CHIẾU');
});
/*End Move Tab*/
/*Choice Day*/
$(function(){
	var day = document.getElementsByClassName('date_list');

	for (var i = 0; i < day.length; i++) {
		day[i].addEventListener("click", function(){
			for (var i = 0; i < day.length; i++) {
				day[i].classList.remove("active");
			}
			this.className += " active";
		});
	}
	});
/*End CHoice Day*/
/*Choice Time*/
$(function(){
	var time = document.getElementsByClassName('time');

	for (var i = 0; i < time.length; i++) {
		time[i].addEventListener("click", function(){
			for (var i = 0; i < time.length; i++) {
				time[i].classList.remove("active");
			}
			this.className += " active";
		});
	}

});
/*End Choice Time*/