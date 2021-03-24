// drinksChosen holds all the drinks that the user selects
let drinksChosen = [];

// "$" is for JavaScript libary jQuery

// click handler
$(".list-group-item").click(function() {
  drinksChosen.push(this.innerText);
  $(this).addClass("active");
  $(this).addClass("disabled");
});

// hover handler
$(".list-group-item").hover(function() {
  $(this).css("cursor", "pointer");
});
