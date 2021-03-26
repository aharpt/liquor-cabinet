// drinksChosen holds all the drinks that the user selects
let drinksChosen = [];

// "$" is for JavaScript libary jQuery

// click handler
$(".list-group-item").click(function() {

  drinksChosen.push(this.innerText);
  $(this).addClass("active");
  $(this).addClass("disabled");

  $(".drinks-selected").append('<li class="list-group-item">' + this.innerHTML + '<a href="#">Remove</a></li>');
});

// Stack Overflow for adding a handler to dynamically generated content : https://stackoverflow.com/questions/9484295/jquery-click-not-working-for-dynamically-created-items
$(".drinks-selected").on("click", "a", function() {
  $(this).parent(".list-group-item").remove();
  drinksChosen.pop(this.innerText);

  let $listGroupItem = $(".list-group-item");
  $(".list-group-item").removeClass("active disabled");

  // for (let i = 0; i < $listGroupItem.length; i++) {
  //   console.log($listGroupItem[i].innerText);
  //   console.log($(this).parent(".list-group-item").text());
  //   if ($listGroupItem[i].innerText == $(this).parent(".list-group-item").text()) {
  //     console.log("in loop");
  //     $(".list-group-item").removeClass("active disabled");
  //   }
  // }
});

// hover handler
$(".list-group-item").hover(function() {
  $(this).css("cursor", "pointer");
});
