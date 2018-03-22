$(document).ready(function(){
  console.log(window)
    $('body').scroll(function(){
      var scroll = $(this).scrollTop();
      if (scroll > 100) {
        $(".transparant-nav").addClass("white");
        $("li a").css("color", "blue");
        $(".navbar-brand").css("color", "blue");
      } else{
        $(".transparant-nav").removeClass("white").addClass("transparant"); 
        $("li a") .css("color","white");
        $(".navbar-brand") .css("color","white");
      }   
    })
  })