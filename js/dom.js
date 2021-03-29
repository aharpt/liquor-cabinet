// drinksChosen holds all the drinks that the user selects
let drinksChosen = [];

// "$" is for JavaScript libary jQuery

/* click handlers */
// click handlers on dynamic content https://stackoverflow.com/questions/9484295/jquery-click-not-working-for-dynamically-created-items
$(".liquor-options").on("click", "li", function() {

  drinksChosen.push(this.innerText);
  $(this).addClass("active");
  $(this).addClass("disabled");

  $(".drinks-selected").append('<li class="list-group-item">' + this.innerHTML + '</li>');

  // Add recipe options dynamically
  $(".recipes-column").append('<div class="card" style="width: 18rem;"><img src="./img/014_resized.jpg" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Drink title</h5><p class="card-text">Drink Description.</p><a href="#" class="btn btn-primary card-link">See Full Recipe</a></div></div>');
  // $(".card-body").append("<p>Paragraph</p>");
});

$("#clearButton").click(function() {

  $(".drinks-selected").remove();
  $(".list-group-item").removeClass("active disabled");
  drinksChosen.pop(this.innerText);

  // remove recipes
  $(".recipes-column .card").remove();
});

// hover handler on dynamic content https://stackoverflow.com/questions/9484295/jquery-click-not-working-for-dynamically-created-items
$(".liquor-options").on("mouseenter", "li", function() {
  $(this).css("cursor", "pointer");
});
