/* Basic scripts for the page */

$(document).ready(function(){
  
  
  /*=============================================================================
   Adds the photographer list.
  =============================================================================*/
  
  
  for(var i = 0; i < photoG.length; i++){
    $(".photographer-list").append("<li class='photographer-list-items'>" + 
                                   "<img src='" + photoG[i].profileImg + "'>" +
                                   "<div class='photograper-info-wrapper'>" +
                                   "<div class='list-info'>" +
                                   "<h3>Photograoher</h3>" +
                                   "<p>" + photoG[i].name + "</p>" +
                                   "<h3>Country</h3>" +
                                   "<p>" + photoG[i].country + "</p>" +
                                   "</div>" +
                                   "<div class='social'>" +
                                   "<img src='img/in.svg'>" +
                                   "<img src='img/fb.svg'>" +
                                   "</div>" +
                                   "</div>" +
                                   "</li>");
  };
  
  
  
  /*=============================================================================
   Adds the images top the page.
  =============================================================================*/
  
  
  
  for(var i = 0; i < imgNew.length; i++){
    $(".images-list").append("<li class='images-list-items'>" + 
                                   "<img src='" + imgNew[i] + "'>" +
                                   /*"<div class='photograper-info-wrapper'>" +
                                   "<div class='list-info'>" +
                                   "<h3>Photograoher</h3>" +
                                   "<p>" + photoG[i].name + "</p>" +
                                   "<h3>Country</h3>" +
                                   "<p>" + photoG[i].country + "</p>" +
                                   "</div>" +
                                   "<div class='social'>" +
                                   "<img src='img/in.svg'>" +
                                   "<img src='img/fb.svg'>" +
                                   "</div>" +
                                   "</div>" +*/
                                   "</li>");
  };
  
  
  
  
  
  /*=============================================================================
    Sliding menu
  =============================================================================*/
  

    var navVisible = false;
    
       $( "#burger-button" ).click(function() {
         
         // ändrar så inte redirekigas när man trycker på länken till
         // burger knappen.
         
         event.preventDefault();
         navVisible = !navVisible;
        
         
         // kollar fönsterstorleken och ändrar navlisten efter det
         if($(window).width() <= 600){
           if(navVisible){
             $( ".nav-list" ).css("left", "100%");
           } else {
             $( ".nav-list" ).css("left", "50%");
           }
         }else if($(window).width() <= 1200){
            if(navVisible){
             $( ".nav-list" ).css("left", "100%");
           } else {
             $( ".nav-list" ).css("left", "75%");
           }  
         }else{
           if(navVisible){
             $( ".nav-list" ).css("left", "100%");
           } else {
             $( ".nav-list" ).css("left", "85%");
          }
         }
        });

  
  
  
  /*=============================================================================
   add class for contackt menu
  =============================================================================*/


          if($(window).width() <= 1020){
            $(".photo-content h2").addClass("cat-header");
          }

          //refresh page on browser resize
          $(window).bind('resize', function(e)
          {
            if (window.RT) clearTimeout(window.RT);
            window.RT = setTimeout(function()
            {
              this.location.reload(false); /* false to get page from cache */
            }, 10);
          });
        
  
});  /* document redy end */

