// when "Run Tests" button is clicked

let triggerClear = () => {
  $("#clearButton").trigger("click");
};

document.querySelector(".tests").addEventListener("click", function() {
  // Testing "See Full Recipe" button
  $(".liquor-options li").trigger("click");

  // simulating click to first "See Full Recipe" button
  $(document.querySelector(".recipe-button")).trigger("click");

  if (document.querySelector(".recipe-button").style.display == "none") {
    console.log("Recipe Button Shows Full Recipe when clicked : Passed");
  } else {
    console.log("Recipe Button Shows Full Recipe when clicked : Failed");
  }

  setTimeout(triggerClear, 5000);
});
