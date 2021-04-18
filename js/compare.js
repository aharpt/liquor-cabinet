//array format is ["Name", # of alcohols, # of non-alcohols, alcoholic ingredients, ... , nonalcoholic ingredients,]


temp_drinkArr = ["Brandy", "Champagne", "Cognac", "Gin", "Red Wine", "Vermouth", "Vodka"];
masterArr = [['Bloody Mary', 1, 7, 'vodka', 'tomatoe juice', 'lemon juice', 'Tabasco sauce', 'Worcestershire sauce', 'celery salt', 'pepper', 'horseradish', './img/Bloody-Mary.jpg'],
            ['Polynesian Pick-Me-Up', 1, 6, 'vodka', 'curry powder', 'lemon juice', 'cream', 'Tabasco sauce', 'crushed ice', './img/Polynesian-Pick-Me-Up.jpg'],
            ['Sangria', 2, 7, 'red wine', 'cognac', 'triple sec', 'maraschino liquor', 'ripe peach', 'lemon slices', 'sugar', 'orange', 'club soda', './img/Sangira.jpg'],
            ['Screwdriver', 1, 3, 'vodka', 'triple sec', 'orange juice', 'lemon juice', './img/Screwdriver.jpg'],
            ['Sea Breeze', 2, 4, 'gin', 'brandy', 'grenadine', 'lemon juice', 'club soda', 'mint sprigs', './img/Sea-Breeze.jpg'],
            ['Cape Cod', 1, 3, 'vodka', 'lime juice', 'cranberry juice', 'sugar', './img/Cape-Cod.jpg'],
            ['Mimosa', 1, 2, 'champagne', 'orange juice', 'apricot nectar', './img/Mimosa.jpg'],
            ['Country Club Cooler', 1, 3, 'vermouth', 'club soda', 'ginger ale', 'grenadine', './img/Country-Club-Cooler.jpg'],
            ['Madras', 1, 2, 'vodka', 'cranberry juice', 'orange juice', './img/Madras.jpg'],
            ['Champagne Blues', 1, 3, 'champagne', 'blue curacao', 'lemon juice', 'lemons', './img/Champagne-lues.jpg']];


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
  let alcoholIngredients = "";
  for (let i = 0; i < masterArr.length; i++) {
    if ($liquorClicked.toLowerCase() == masterArr[i][3]) {

  //     for (let j = 4; j < (masterArr[i].length - 1); j++) {
  //       nonAlcoholIngredients += masterArr[i][j];
  //       if (j !== (masterArr[i].length - 2)) {
  //         nonAlcoholIngredients += ", ";
  //       }
  //     }

      // SAME CONCEPT AS ABOVE JUST NEW IMPLEMENTATION
      for (let j = 3; j < (masterArr[i].length - 1); j++) {
        for (let k = 0; k < temp_drinkArr.length; k++) {
          if (masterArr[i][j] == temp_drinkArr[k].toLowerCase()) {
            if (alcoholIngredients == "") {
              alcoholIngredients += masterArr[i][j];
            } else {
              alcoholIngredients += ", ";
              alcoholIngredients += masterArr[i][j];
            }
            break;
          }

          if (k == (temp_drinkArr.length - 1)) {
            if (nonAlcoholIngredients == "") {
              nonAlcoholIngredients += masterArr[i][j];
            } else {
              nonAlcoholIngredients += ", ";
              nonAlcoholIngredients += masterArr[i][j];
            }
          }
        }
      }

      console.log("In conditional");
      $(".possibleDrinks").prepend('<div class="card" style="width: 18rem;"><img src="'+ masterArr[i][(masterArr[i].length - 1)] + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + masterArr[i][0] + '</h5><p class="card-text">' + masterArr[i][0] + '.</p><button class="btn btn-primary recipe-button">See Full Recipe</button><ul id="ingredients"><span>Ingredients:</span><ol>Parts Alcohol: ' + masterArr[i][1] + '</ol><ol>Parts Non-Alcohol: ' + masterArr[i][2] + '</ol><ol>Alcohol Ingredients: ' + alcoholIngredients + '</ol><ol>Non-Alcohol Ingredients: ' + nonAlcoholIngredients+ '</ol></ul></div></div>');

      nonAlcoholIngredients = "";
      alcoholIngredients = "";
    }
  }
});




console.log(possibleRecipes);

/* Changing Liquor Array when the User Inputs a file */

// reads data from uploaded file
function readFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  if (!(file.name.split(".").pop().toLowerCase() == 'txt')) {
    console.log(file.name.split(".").pop().toLowerCase())
    alert("Invalid file type, please try again.");
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    //addData(contents);
    displayUploadedData(contents);
  };
  reader.readAsText(file);
}

// adds uploaded data to temp_drinkArr
function addData(contents) {

  // counter for temp_drinkArr
  let j = 0;
  // reset temp_drinkArr to empty array of ten elements
  temp_drinkArr = ["", "", "", "", "", "", "", "", "", ""];

  for (let i = 0; i < contents.length; i++) {
    if (contents[i] !== "," ) {
      temp_drinkArr[j] += contents[i];
    } else {
      j++;
    } // else
  } // for
}

// displays data from uploaded file
function displayUploadedData(selections) {
  //Parsing through the character list

  let holder = "";
  let loadedChoices = [];
  for (let i = 0; i < selections.length; i++) {
    if(selections[i] != ",") {
      holder += selections[i];
    }
    else {
      holder = holder.trim();
      loadedChoices.push(holder);
      holder = "";
    }
  }
  //console.log(loadedChoices)

  //reloading the options
  let list = document.querySelector(".liquor-options");
  list.innerHTML = "";
  for (let i = 0; i < temp_drinkArr.length; i++) {
    list.innerHTML += '<li class="list-group-item">' + temp_drinkArr[i] + '</li>';
  }
  //preclicking elements
  let arr = list.getElementsByTagName("li")
  for (let i = 0; i < loadedChoices.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log("Testing ", loadedChoices[i]);
      if (loadedChoices[i] == arr[j].innerText) {
        arr[j].click();
        console.log("Clicking ", arr[j].innerText);
      }
    }
  }
  console.log("Finished uploading");  
}

document.getElementById('upload-file')
  .addEventListener('change', readFile, false);