$(document).ready(function(){
  // 왼쪽메뉴
  $("a.mainMenu").on("mouseenter focus",function(){
    $("a.mainMenu").removeClass("act");
    $(this).addClass("act");
    $("nav.subMenu").stop().hide();
    $(this).next().stop().show();
  });
  // 왼쪽 서브메뉴
 $("#left ul").mouseleave(function(){
  $("nav.subMenu").removeClass("act");
  $("nav.subMenu").stop().hide();
  $("a.mainMenu").removeClass("act");
 });
 $(".last").blur(function(){
  $("a.mainMenu").removeClass("act");
  $("nav.subMenu a").removeAttr("class");
  $("nav.subMenu").stop().hide();
 });
 setInterval(toUP , 2800);
 function toUP(){
  $("#slide").stop().animate({top:"-600px"},1200,function(){
    $("#slide").prepend( $("#slide img").eq(2) );
    $("#slide").css("top" , "-1200px");
  });
 }
});