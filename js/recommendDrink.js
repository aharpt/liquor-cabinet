
/* Artifact Name: dateChange
* Description: displays the system time and a drink recommendation
* Author: Nick Velicer
* Date Created: 3/27/21
* Date Revised: 4/16/21 author: Nick Velicer description: added recursive functionality
* Post Conditions: time is displayed and updated with according drink recommendations depending on the hour.
*/
function dateChange() {
    let d = new Date();

    // For displaying minutes correctly when minutes is less than 10 : https://stackoverflow.com/questions/8935414/getminutes-0-9-how-to-display-two-digit-numbers
    document.getElementById("time").innerText = "It's "+d.getHours()%12+":"+(d.getMinutes()<10?'0':'') + d.getMinutes();
    drinksequence = ["Mimosa", "Bloody Mary", "Sea Breeze", "Sangria", "Champagne Blues", "Polynesian Pick-Me-Up", "Cape Cod", "Country Club Cooler", "Madras", "Screwdriver"];
    if (d.getHours() < 11 && d.getHours() >= 3) {
        document.getElementById("recommendation").innerText = "It's a bit early for a drink, don't you think?";
    }
    else if (d.getHours() > 20 || d.getHours() < 2) {
        document.getElementById("recommendation").innerText = "It's a bit late for a drink, don't you think?";
    }
    else {
    document.getElementById("recommendation").innerText = "Perhaps a refreshing "+drinksequence[d.getHours()-11]+"?";
    }
    setTimeout(dateChange, 1000);
}
dateChange();
