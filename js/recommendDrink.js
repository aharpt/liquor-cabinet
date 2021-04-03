let d = new Date();

document.getElementById("time").innerText = "It's "+d.getHours()%12+":"+d.getMinutes()
document.getElementById("recommendation").innerText = "Perhaps a refreshing martini?"