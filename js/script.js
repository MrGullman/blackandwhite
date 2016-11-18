/* Basic scripts for the page */

$(document).ready(function(){
  
  // Adds the photographer list.
  
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
  
  
    /*if(navVisible){
      $(".nav-list").animate({left:"50%"}500);
    }else{
      $(".nav-list").animate({right:"-50%"}500);
    }
  }*/
    
  //});
 
    var navVisible = false;
    
       $( "#burger-button" ).click(function() {
         
         event.preventDefault();
         navVisible = !navVisible;
         
         if(navVisible){
           $( ".nav-list" ).css("left", "100%");
         } else {
           $( ".nav-list" ).css("left", "50%");
         }
        });
  
});


/*  Hjälp Taggar under utveckling skall tas bort  */

/*<li class="images-list-items">
              <div class="photo">
                <img src="img/boat01.jpg" alt="boat image"> 
                <div class="overlay">
                  <h3 class="list-info">Photorapher:</h3>
                  <p class="list-info">Jesper Gullman</p>
                </div>
              </div>
            </li>*/


/*<li class="photographer-list-items">
            <img src="img/me.jpg" alt="photographer jesper">
              <div class="photograper-info-wrapper">
                <div class="list-info">  
                  <h3>Phtographer</h3>
                  <p>Jesper Gullman</p>
                  <h3>Country</h3>
                  <p>Sweden</p>
                </div>
                <div class="social">
                  <img src="img/in.svg" alt="instagram logo">
                  <img src="img/fb.svg" alt="facebook logo">
                </div>
             </div>
           </li>*/