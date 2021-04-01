//array format is ["Name", # of alcohols, # of non-alcohols, alcoholic ingredients, ... , nonalcoholic ingredients,]

temp_drinkArr = ["Brandy", "Champagne", "Cognac", "Gin", "Red Wine", "Vermouth", "Vodka"];
masterArr = [['Bloody Mary', 1, 7, 'vodka', 'tomatoe juice', 'lemon juice', 'Tabasco sauce', 'Worcestershire sauce', 'celery salt', 'pepper', 'horseradish'],
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
            if (db[i][j+3] != liquor) {
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

// click handler to display recipes
$(".liquor-options").on("click", "li", function() {
  // Add recipe options dynamically
  // Photo by <a href="https://unsplash.com/@jordannix?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jordan Nix</a> on <a href="https://unsplash.com/s/photos/martini?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

  $(".recipes-column").append('<div class="card" style="width: 18rem;"><img src="./img/martini.jpg" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + possibleRecipes[0] + '</h5><p class="card-text">' + possibleRecipes[0] + '.</p><a href="#" class="btn btn-primary card-link">See Full Recipe</a></div></div>');

});
console.log(possibleRecipes);
