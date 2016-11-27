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
										   "<a href='" + photoG[i].in + "'>" +
										   "<img src='img/in.svg'>" +
										   "</a>" +
										   "<a href='" + photoG[i].fb + "'>" +
										   "<img src='img/fb.svg'>" +
										   "</a>" +
									   "</div>" +
									 "</div>" +
                                   "</li>");
  };
  
  
  
  /*=============================================================================
   Adds the images top the page.
  =============================================================================*/
  
  
  
  for(var i = 0; i < imageList.length; i++){
    $(".images-list").append("<li class='images-list-items'>" + 
                                   "<img src='" + imageList[i] + "'>" +
                                   "</li>");
  };
  
  
  
  
  
  /*=============================================================================
    Sliding menu
  =============================================================================*/
  

    var navVisible = false;
    
       $( "#burger-button" ).on('click', function() {
         
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
    Adds the text to the headerImage
  =============================================================================*/
  
    document.getElementById("welcomeText").innerHTML = "Välkommen till Black &amp; White PIX " + "<br>" +
            "Sidan för personer som gillar att ta bilder i svart och vitt. här kommer du ha möjlighet att visa upp dina bilder. Fler uppdateringar till sidan kommer löpande.";
  
});  /* document redy end */

