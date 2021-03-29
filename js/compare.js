temp_drinkArr = ["Rum", "Rye Whiskey", "Bourbon Whiskey"];
temp_masterArr = [["Old Fashioned", 1, 3, "Rye Whiskey", "Bitters", "Sugar Cube", "Orange Peel"], ["Gimlet", 1, 2, "Gin", "Lime Juice"], ["Caribbean Dog Turd", 6, 0, "Rum", "Rum", "Rum", "Rum", "Rum", "Rum"]];


possibleRecipes = [];

function compMaster(list, file) {
    for (var i = 0; i < list.length; i++) {
        iterate(list[i], file)
    }
}


function iterate(liquor, db) {
    console.log("Reading ", liquor);
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

compMaster(temp_drinkArr, temp_masterArr);
console.log(possibleRecipes);