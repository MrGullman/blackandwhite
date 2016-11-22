/* En lista med alla bilder från fotograferna */

  
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
  
  /*
  nu ligger alla bildlänkar i imagelist
  som blandade länkar.
  */

  imageList.shuffle();
  

  

  /*=============================================================================
  Prototype kod för att testa skall vara under denna linje
  Under utveckling, skall bli att man ser vilken fotograf som har
  tagit bilden.
  =============================================================================*/

    var imageListNew = [];
    var tempName = [];
    var one = [];


  for(var i = 0; i < photoG.length; i++){
    tempName = [photoG[i].name];
    imageListNew.push(tempName.push(photoG[i].images));
    //console.dir(tempName);
    for(var j = 0; j < 1 ; j++){
      one.push(tempName);
    }
  }
  console.dir(one);
 





    
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

    /*console.log(photoG[0].images[0]);
    console.dir(findPhotographer);
    console.dir(photographersName);
    console.dir(photographersImages);*/

    for(var i = 0; i < photographersName.length; i++){
      photographersProperty.push([photographersName[i]].concat(photographersImages[i]));
    }
    

    /*console.dir(photographersProperty);*/
    
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

    imgNew.shuffle();
    /*console.dir(imgNew);
    console.dir(photogNew);*/
  
  /*===========================================================================*/
  
  


