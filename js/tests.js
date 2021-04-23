// when "Run Tests" button is clicked

let triggerClear = () => {
  $("#clearButton").trigger("click");
  document.getElementById("download-file").setAttribute("disabled", true);
  document.getElementById("download-file").classList += " disabled";
};

let triggerOneDrink = () => {
  $(".liquor-options li").trigger("click");
  var x = document.getElementsByClassName("list-group-item active disabled");
  var i;
  for (i = 0; i < x.length; i++) {
    console.log(x[i].innerHTML )
} 
  console.log("aloha");
}

document.querySelector(".tests").addEventListener("click", function() {
  // Testing "See Full Recipe" button
  $(".liquor-options li").trigger("click");
  var x = document.getElementsByClassName("list-group liquor-options");
  var i;
  for (i = 0; i < x.length; i++) {
    console.log(i);
    console.log(x[i]);
  } 
  console.log("aloha");

  // simulating click to first "See Full Recipe" button
  $(document.querySelector(".recipe-button")).trigger("click");

  if (document.querySelector(".recipe-button").style.display == "none") {
    console.log("Recipe Button Shows Full Recipe when clicked : Passed");
  } else {
    console.log("Recipe Button Shows Full Recipe when clicked : Failed");
  }

  // end of "See Full Recipe" test

  // setTimeout to trigger clear after successive tests
  setTimeout(triggerClear, 1000);

});

