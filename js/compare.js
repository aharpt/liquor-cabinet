//array format is ["Name", # of alcohols, # of non-alcohols, alcoholic ingredients, ... , nonalcoholic ingredients,]

temp_drinkArr = ["Brandy", "Champagne", "Cognac", "Gin", "Red Wine", "Vermouth", "Vodka"];
masterArr = [['Bloody Mary', 1, 7, 'vodka', 'tomatoe juice', 'lemon juice', 'Tabasco sauce', 'Worcestershire sauce', 'celery salt', 'pepper', 'horseradish', './img/Bloody-Mary.jpg'],
            ['Polynesian Pick-Me-Up', 1, 6, 'vodka', 'curry powder', 'lemon juice', 'cream', 'Tabasco sauce', 'crushed ice'],
            ['Sangria', 2, 7, 'red wine', 'cognac', 'triple sec', 'maraschino liqueur', 'ripe peach', 'lemon slices', 'sugar', 'orange', 'club soda'],
            ['Screwdriver', 1, 3, 'vodka', 'triple sec', 'orange juice', 'lemon juice'],
            ['Sea Breeze', 2, 4, 'gin', 'brandy', 'grenadine', 'lemon juice', 'club soda', 'mint sprigs'],
            ['Cape Cod', 1, 3, 'vodka', 'lime juice', 'cranberry juice', 'sugar'],
            ['Mimosa', 1, 2, 'champagne', 'oragne juice', 'apricot nectar'],
            ['Country Club Cooler', 1, 3, 'vermouth', 'club soda', 'ginger ale', 'grenadine'],
            ['Madras', 1, 2, 'vodka', 'cranberry juice', 'orange juice'],
            ['Champagne Blues', 1, 3, 'champagne', 'blue curacao', 'lemon juice', 'lemons']];


possibleRecipes = [];

function compMaster(list, file) {
    for (var i = 0; i < list.length; i++) {
        iterate(list[i], file)
    }
}


function iterate(liquor, db) {
    console.log("Reading ", liquor);
    // appends drinks for temp_drinkArr
    $(".liquor-options").append('<li class="list-group-item">' + liquor + '</li>');
    for (var i = 0; i < db.length; i++) {
        for (var j = 0; j < db[i][1]; j++) {
            //console.log("Testing if ", db[i][j+3].toLowerCase(), " = ", liquor.toLowerCase());
            if (db[i][j+3].toLowerCase() != liquor.toLowerCase()) {
                break;
            }
            else {
                possibleRecipes.push(db[i][0]);
                break;
            }
        }
    }
}

compMaster(temp_drinkArr, masterArr);

/* click handler for "Get Full Recipe" button */
$(".recipes-column").on("click", ".recipe-button", function() {
  $(this).hide();
  $(this).siblings("#ingredients").show();
});

/* Function to search drink clicked and see what recipes should be displayed */
$(".liquor-options").on("click", "li", function() {
  let $liquorClicked = $(this).text();
  let nonAlcoholIngredients = "";

  for (let i = 0; i < masterArr.length; i++) {
    if ($liquorClicked.toLowerCase() == masterArr[i][3]) {

      for (let j = 4; j < (masterArr[i].length - 1); j++) {
        nonAlcoholIngredients += masterArr[i][j];
        nonAlcoholIngredients += ", ";
      }

      console.log("In conditional");
      $(".recipes-column").append('<div class="card" style="width: 18rem;"><img src="'+ masterArr[i][(masterArr[i].length - 1)] + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + masterArr[i][0] + '</h5><p class="card-text">' + masterArr[i][0] + '.</p><a href="#" class="btn btn-primary card-link recipe-button">See Full Recipe</a><ul id="ingredients"><span>Ingredients:</span><ol>Parts Alcohol: ' + masterArr[i][1] + '</ol><ol>Parts Non-Alcohol: ' + masterArr[i][2] + '</ol><ol>Alcohol Ingredients: ' + masterArr[i][3] + '</ol><ol>Non-Alcohol Ingredients: ' + nonAlcoholIngredients+ '</ol></ul></div></div>');
    }
  }
});




console.log(possibleRecipes);
