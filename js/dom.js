// drinksChosen holds all the drinks that the user selects
let drinksChosen = [];
document.getElementById("download-file").setAttribute("disabled", true);
document.getElementById("download-file").classList += " disabled";

// "$" is for JavaScript libary jQuery


/* Artifact Name: Callback function to be fired when a liquor is clicked
* Description: When liquor is clicked, adds liquor to drinksChosen array and appends liquor to the list of selected drinks
* Author: Aaron Harpt
* Date Created: 3/23/21
* Date Revised: 3/25/21, author: Aaron Harpt, description: Added append() call to append drink chosen to list of selected drinks
* Date Revised: 4/17/21, author: Aaron Harpt, description: Removed Unneeded appending of .card element
* Date Revised: 4/17/21, author: Aaron Harpt, description: Added code to enable 'Download' button when a list item is clicked
* Post Conditions: Liquor clicked is added to drinksChosen array, and element clicked is activated and added to drinks-selected
*/

// click handlers on dynamic content https://stackoverflow.com/questions/9484295/jquery-click-not-working-for-dynamically-created-items
$(".liquor-options").on("click", "li", function() {
  document.getElementById("download-file").disabled = false;
  document.getElementById("download-file").classList.remove("disabled");
  drinksChosen.push(this.innerText);
  $(this).addClass("active");
  $(this).addClass("disabled");

  $(".drinks-selected").append('<li class="list-group-item">' + this.innerHTML + '</li>');
});


/* Artifact Name: Callback function to be fired when the "Clear Selection" button is clicked
* Description: When "Clear Selection" is clicked, empty the selected drinks list, and empty the drinksChosen array
* Author: Aaron Harpt
* Date Created: 3/29/21
* Post Condtions: drinksChosen is equal to an empty array, drinks-selected is emptied, and all liquors and liquor recipes are unactivated
*/
$("#clearButton").click(function() {

  $(".drinks-selected li").remove();
  $(".list-group-item").removeClass("active disabled");
  drinksChosen = [];

  // remove recipes
  $(".recipes-column .card").remove();
});

/* Artifact Name: Callback function to be fired when your cursor "mouses over" a liquor
* Description: When a liquor is "moused over", the cursor changes to a pointer, indicating the element can be clicked on
* Author: Aaron Harpt
* Date Created: 3/23/21
* Date Revised: 3/29/21 author: Aaron Harpt description: changed handler to being fired on "hover", event to "mouseover" event
* Post Condtions: drinksChosen is equal to an empty array, drinks-selected is emptied, and all liquors and liquor recipes are unactivated
*/

// hover handler on dynamic content https://stackoverflow.com/questions/9484295/jquery-click-not-working-for-dynamically-created-items
$(".liquor-options").on("mouseenter", "li", function() {
  $(this).css("cursor", "pointer");
});


document.getElementById("download-file").onclick = function() {downloadManagement()};

function downloadManagement() {
  let content = ""
  for (let i = 0; i < drinksChosen.length; i++) {
    content += drinksChosen[i];
    content += ", ";
  }
  let filename = "yourcabinet.txt";
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
