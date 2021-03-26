// drinksChosen holds all the drinks that the user selects
let drinksChosen = [];

// "$" is for JavaScript libary jQuery

/* click handlers */
$(".list-group-item").click(function() {

  drinksChosen.push(this.innerText);
  $(this).addClass("active");
  $(this).addClass("disabled");

  $(".drinks-selected").append('<li class="list-group-item">' + this.innerHTML + '</li>');
});

$("#clearButton").click(function() {

  $(".drinks-selected").remove();
  $(".list-group-item").removeClass("active disabled");

  drinksChosen.pop(this.innerText);
});

// hover handler
$(".list-group-item").hover(function() {
  $(this).css("cursor", "pointer");
});
