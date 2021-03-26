// drinksChosen holds all the drinks that the user selects
let drinksChosen = [];

// "$" is for JavaScript libary jQuery

// click handler
$(".list-group-item").click(function() {

  drinksChosen.push(this.innerText);
  $(this).addClass("active");
  $(this).addClass("disabled");

  $(".drinks-selected").append('<li class="list-group-item">' + this.innerHTML + '<a href="#">Remove</a></li>');
  console.log(drinksChosen);
});

// Stack Overflow for adding a handler to dynamically generated content : https://stackoverflow.com/questions/9484295/jquery-click-not-working-for-dynamically-created-items
$(".drinks-selected").on("click", "a", function() {
  $(this).parent(".list-group-item").remove();
  drinksChosen.pop(this.innerText);
  $(".list-group-item").removeClass("active disabled");
  console.log(drinksChosen);
});

// hover handler
$(".list-group-item").hover(function() {
  $(this).css("cursor", "pointer");
});
