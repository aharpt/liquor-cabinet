let drinksChosen = [];

$(".list-group-item").click(function() {
  drinksChosen.push(this.innerText);
  $(this).addClass("active");
});

$(".list-group-item").hover(function() {
  $(this).css("cursor", "pointer");
});
