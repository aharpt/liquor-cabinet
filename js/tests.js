

let triggerClear = () => {
  $("#clearButton").trigger("click");
  document.getElementById("download-file").setAttribute("disabled", true);
  document.getElementById("download-file").classList += " disabled";
};

let triggerOneDrink = () => {
  // 1. trigger click to "Brandy"
  $(".Brandy").trigger("click");
  // 2. count number of liquor options that have an active class
  let liquorsSelected = document.querySelectorAll(".active");
  triggerClear();
  return (liquorsSelected.length == 1);
};

let noAlcoholsSelected = () => {
  let list = document.querySelector(".liquor-options");
  let arr = list.getElementsByClassName("active disabled");
  let list2 = document.querySelector(".drinks-selected");
  let arr2 = list2.getElementsByTagName("Li");
  return(arr.length==arr2.length);
};

let allAlcoholsSelected = () => {
  $(".liquor-options li").trigger("click");
  let list = document.querySelector(".liquor-options");
  let arr = list.getElementsByClassName("active disabled");
  let list2 = document.querySelector(".drinks-selected");
  let arr2 = list2.getElementsByTagName("Li");
  triggerClear();
  return(arr.length==arr2.length);
};

let seeFullRecipe = () => {
  // simulating click to first "See Full Recipe" button
  $(".liquor-options li").trigger("click");
  $(document.querySelector(".recipe-button")).trigger("click");
  return(document.querySelector(".recipe-button").style.display == "none");
  // end of "See Full Recipe" test
};

let checkClearButton = () => {
  triggerClear();
  let list = document.querySelector(".liquor-options");
  let arr = list.getElementsByClassName("active disabled");
  let list2 = document.querySelector(".drinks-selected");
  let arr2 = list2.getElementsByTagName("Li");
  return(arr.length == 0 && arr2.length == 0);
}

// when "Run Tests" button is clicked
document.querySelector(".tests").addEventListener("click", function() {
  alert("Please check the console for test suite results.");
  console.log( "\n\n=========================\n");
  console.log("   RUNNING TEST SUITE    \n");
  console.log("=========================\n\n");
  console.log("Test 1: No alcohols selected displays no drink options " + (noAlcoholsSelected() ? "PASSED" : "FAILED")+"\n");
  console.log("Test 2: All alcohols selected displays all drink options " + (allAlcoholsSelected() ? "PASSED" : "FAILED")+"\n");
  console.log("Test 3: Single alcohol selected displays drink options for that alcohol " + (triggerOneDrink() ? "PASSED" : "FAILED") + "\n");
  console.log("Test 4: Recipe Button Shows Full Recipe when clicked " + (seeFullRecipe() ? "PASSED" : "FAILED")+"\n");
  console.log("Test 5: Clear selection clears selected liquors and drinks selected " + (checkClearButton() ? "PASSED" : "FAILED")+"\n");

  setTimeout(triggerClear, 1000);
});
