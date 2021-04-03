let d = new Date();

// For displaying minutes correctly when minutes is less than 10 : https://stackoverflow.com/questions/8935414/getminutes-0-9-how-to-display-two-digit-numbers
document.getElementById("time").innerText = "It's "+d.getHours()%12+":"+(d.getMinutes()<10?'0':'') + d.getMinutes();
document.getElementById("recommendation").innerText = "Perhaps a refreshing martini?"
