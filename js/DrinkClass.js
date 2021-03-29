
// note: do we want the "database" that holds all of the drink info to be an object {}
// that has each drink numbered so we can iterate through a for loop to create all of
// the drink objects?
//
// for example:
// var database = {1:[], 2:[], 3:[]};
// var i;
// for(i=1; i<="database length"; i++) {
//   let new Drink(database.i);
// }


class Drink {

//drink abject is constructed by reading in the array with all of its info
  constructor(drink) {
    this.name = drink[0];
    this.alcohol = new Array();
    this.ingredients = [];
    //iterates through alcoholic ingredients in database
    var i;
    for(i=drink[1]; i<=drink[1]; i++) {
      this.alcohol.push(drink[i]);
    }
    //iterates through nonalcoholic ingredients in database
    var j;
    for(j=drink[2]; j<=drink[2]; j++) {
      this.ingrdients.push(drink[j]);
    }
  }




}
