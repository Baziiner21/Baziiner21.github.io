var $root = $('html, body');

$('a[href^="#scrollToIt"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 2000);

    return false;
});





$(function() { 

	$("#scrollTop").on('click', function() 

		{ $("HTML, BODY").animate({ scrollTop: 0 }, 2000); 

	}); 


});


$(window).scroll(function(){


	if($(window).width()<= 750){

		$('h1').toggleClass('opacity', $(this).scrollTop() > 30);
		$('hr').toggleClass('opacity', $(this).scrollTop() > 80);
		$('h2').toggleClass('opacity', $(this).scrollTop() > 100);
		$('div').toggleClass('opacity', $(this).scrollTop() > 200);
	}

	else if($(window).width() > 750 && $(window).width() < 970 ){


		$('h1').toggleClass('opacity', $(this).scrollTop() > 40);
		$('hr').toggleClass('opacity', $(this).scrollTop() > 80);
		$('h2').toggleClass('opacity', $(this).scrollTop() > 100);
		$('div').toggleClass('opacity', $(this).scrollTop() > 250);
	}
	else if($(window).width() >= 970 && $(window).width() < 1170 ){



		$('h1').toggleClass('opacity', $(this).scrollTop() > 40);
		$('hr').toggleClass('opacity', $(this).scrollTop() > 80);
		$('h2').toggleClass('opacity', $(this).scrollTop() > 100);
		$('div').toggleClass('opacity', $(this).scrollTop() > 250);
	}

	else if($(window).width() >= 1326 && $(window).width()<1400){


		$('h1').toggleClass('opacity', $(this).scrollTop() > 40);
		$('hr').toggleClass('opacity', $(this).scrollTop() > 80);
		$('h2').toggleClass('opacity', $(this).scrollTop() > 100);
		$('div').toggleClass('opacity', $(this).scrollTop() > 250);
	}
	else{


		$('h1').toggleClass('opacity', $(this).scrollTop() >40);
		$('hr').toggleClass('opacity', $(this).scrollTop() > 80);
		$('h2').toggleClass('opacity', $(this).scrollTop() > 100);
		$('div').toggleClass('opacity', $(this).scrollTop() > 250);
	}

});







$(window).scroll(function(){

	$('nav').toggleClass('scroll', $(this).scrollTop() > 0);

});



// Cache selectors
var lastId,
    topMenu = $("#navbar"),
    topMenuHeight = topMenu.outerHeight()+80,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 900);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});




