$(document).ready(function(){

  $('body').addClass('js');
    var $menu = $('#menu'),
      $menulink = $('.menu-link');
      $links =$('#menu').find('a')
    
  $menulink.click(function() {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
  });

  $links.click(function(){
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
  });

  $('.rslides').responsiveSlides();
});

var mq48 = window.matchMedia('(min-width:48em)')


function mediaQueries(mq48){
  if(mq48.matches){
    document.getElementById("logo-video").innerHTML= `<iframe width="560" height="315" src="https://www.youtube.com/embed/WO8NkayiFSE" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>`
  }
  else{
    document.getElementById("logo-video").innerHTML= `<a href= "https://www.youtube.com/watch?v=-LqZt5Z-Tcg" target="_blank">Ver video</a>`
  }
}

mediaQueries(mq48)
mq48.addListener(mediaQueries)