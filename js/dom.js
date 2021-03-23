let drinksChosen = [];

$(".list-group-item").click(function() {
  drinksChosen.push(this.innerText);
  $(this).addClass("active");
});
