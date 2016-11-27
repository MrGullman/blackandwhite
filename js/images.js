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

  
  


