(function(){
  "use strict"

  var itemTotal = items.reduce(function(total, item, index, array){
    return total + item.price;
  }, 0);

  console.log('The average price is $' + (itemTotal/items.length)
  .toFixed(2) );

  //var priceArray = [12, 20, 50, 25, 41.95, 5.75, 32.99, 15,
    //28.95, 4.95, 18, 2.99, 38, 20, 28, 13.59, 17, 48, 15,
    //14, 80, 22, 6.99, 6.99, 3.50], thisTotal=0, thisAverage=0;
      //for(var i = 0; i < priceArray.length; i++)
        //{thisTotal += priceArray[i];}
          //console.log(thisTotal);
        //thisAverage=(thisTotal/priceArray.length);
          //console.log(thisAverage.toFixed(2));

  var certainAmount = items.filter(function(item){
      if(item.price > 14 && item.price < 18){
      console.log("Items that cost between $14.00 USD and $18.00 USD:"
      , item.title);
      return true;
    }
  });

  var britishPounds = items.filter(function(item){
      if(item.currency_code == "USD"){
        return false;
      }else if(item.currency_code == "GBP"){
        console.log("Items with a GBP currency code:", item.title);
        return true;
      }
  });

  var woodItems = items.forEach(function(item){
    if(item.materials.indexOf('wood') > -1){
      console.log("Items containing wood:", item.title);
      return true;
    }
  });

  var materialAmount = items.forEach(function(item){
    if(item.materials.length > 8){
      console.log("Items with eight or more materials:", item.title);
      return true;
    }
  });

  var itemsBySeller = items.filter(function(item){
    if(item.who_made.includes("i_did")){
      return true;
    }
  })
  console.log(itemsBySeller.length, ":were made by their sellers");




}());
