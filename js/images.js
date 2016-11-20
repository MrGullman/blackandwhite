/* En lista med alla bilder från fotograferna */

//$(document).ready(function(){
  
  /*=============================================================================
  Kod för att få ut bilderna från objecten.
  =============================================================================*/
  
  /* 
  Kollar igenom objekten för att få ut bild arrayen
  och sparar dem till images arrayen 
  */
  var images = [];
  
  for(var i = 0; i < photoG.length; i++){
    images.push(photoG[i].images);
  }
  
  /*
  Kör igenom arrayen av arrayen för att få ut alla bildlänkar till 
  en och samma array.
  */
  
  var imageList = [];
  
  for(var i = 0; i < images.length; i++){
    for(var j = 0; j <images[i].length; j++){
      imageList.push(images[i][j]);
      //console.dir(images[i][j]);
    }
  }
  
  //console.log(imageList);
  
  /*=============================================================================
  KOD HITTAD PÅ NÄTET
  För att blanda bilderna i arrayn.
  =============================================================================*/
  
  Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}
  
  imageList.shuffle();
  
  //console.log(imageList);
  
  /*
  nu ligger alla bildlänkar i imagelist
  som blandade länkar.
  */
  

  /*=============================================================================
  Prototype kod för att testa skall vara under denna linje
  =============================================================================*/

    
    var findPhotographer = photoG;
    var photographersName = [];
    var photographersImages = [];
    var photographersProperty = [];

    for(var i = 0; i < findPhotographer.length; i++){
      photographersName.push(findPhotographer[i].name);
    }

    for(var i = 0; i < findPhotographer.length; i++){
      photographersImages.push(findPhotographer[i].images);
    }

    console.log(photoG[0].images[0]);
    console.dir(findPhotographer);
    console.dir(photographersName);
    console.dir(photographersImages);

    for(var i = 0; i < photographersName.length; i++){
      photographersProperty.push([photographersName[i]].concat(photographersImages[i]));
    }
    

    console.dir(photographersProperty);
    
    var imgNew = [];
    var photogNew = [];

    for (var i = 0; i < photographersProperty.length; i++){
      for (var j = 1; j < photographersProperty[i].length; j++){
       imgNew.push(photographersProperty[i][j]); 
      }
    }

    //for (var i = photographersProperty.length-1; i>0; i--){
    for (var i = 0; i < photographersProperty.length; i++){
      //for (var j = photographersProperty[i].length; j>-1; j--){
      for (var j = 1; j < photographersProperty[i].length; j++){
       photogNew.push(photographersProperty[i][j]); 
      }
    }

    console.dir(imgNew);
    console.dir(photogNew);
  
  /*===========================================================================*/
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//});

/*
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
                                   */