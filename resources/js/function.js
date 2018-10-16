/*datepicker*/
 $( function() {
   $('.checkIn').datepicker({
    dateFormat: 'yy-m-d',
    inline: true,
    onSelect: function(dateText, inst) { 
        var date = $(this).datepicker('getDate'),
            day  = date.getDate(),  
            month = date.getMonth() + 1,
            year = date.getFullYear();              
        $('.checkIn').val(day); 	
      	$('.monthCI').val(month+'.'+year);
    }
});
    $('.checkOut').datepicker({
    dateFormat: 'yy-m-d',
    inline: true,
    onSelect: function(dateText, inst) { 
        var date = $(this).datepicker('getDate'),
            day  = date.getDate(),  
            month = date.getMonth() + 1,
            year = date.getFullYear();              
        $('.checkOut').val(day); 	
      	$('.monthCO').val(month+'.'+year);
    }
});
   
  } );
/*end*/
  
/* start slide show  */

var slideIndex = 1;
var ktShow=0;
showSlides(1);
// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("bannerchild");
	var getCap = document.getElementsByClassName("cap");
	console.log(slides.length);
	var dots = document.getElementsByClassName("dot-child");
	if (n > slides.length) {slideIndex = 1} 
		if (n < 1) {slideIndex = slides.length}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			}
			for (i = 0; i < slides.length; i++) {
				slides[i].className=slides[i].className.replace(" nghiengVe","");
				slides[i].className = slides[i].className.replace(" kichHoat", "");
				slides[i].className = slides[i].className.replace(" moveLeave", "");
				slides[i].className = slides[i].className.replace(" moveNext", "");
			}
			for(i=0;i<getCap.length;i++){
				getCap[i].className=getCap[i].className.replace(" capActive","");
			}
			slides[slideIndex-1].className += " kichHoat"; 
			dots[slideIndex-1].className += " active";
			getCap[slideIndex-1].className += " capActive";
			if(slideIndex == 1){
				slides[slides.length -1].className += " moveLeave"; 
				slides[slideIndex-1].className += " moveNext";
			}
			else{
				slides[slideIndex-2].className += " moveLeave"; 
				slides[slideIndex-1].className += " moveNext"; 
			}
		}
/* end slide show */

/* show subMenu*/

function showMenu(n){
	console.log(ktShow);
	var temp;
	var getSubMenu =document.getElementsByClassName("subMenu");
	var slides = document.getElementsByClassName("bannerchild");
	if(ktShow==1){
		for (var i =0; i < slides.length; i++) {
			  slides[i].className=slides[i].className.replace(" nghiengTheoY","");
			  slides[i].className += " nghiengVe";
		}
		getSubMenu[0].className=getSubMenu[0].className.replace(" subMenuShow","");
		getSubMenu[0].className += " subMenuHide";
		temp = 0;
		ktShow=temp;
	}
	else if(ktShow == 0){
		for (var i =0; i < slides.length; i++) {
			slides[i].className=slides[i].className.replace(" nghiengVe","");
			 slides[i].className += " nghiengTheoY";
		}
		getSubMenu[0].className=getSubMenu[0].className.replace(" subMenuHide","");
		getSubMenu[0].className += " subMenuShow";
		temp =1;
		ktShow=temp;
	}
	console.log(ktShow);
}
/*end show subMenu*/
