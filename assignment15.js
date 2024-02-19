var guestList = ["umer", "ahad", "anas", "zain", "bilal"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are invited to dinner. It would be an honor to have you join us."));
}
var guestWhoCanotcome = guestList[1]; // Assume bilal is not comming
console.log("Unfortunately, ".concat(guestWhoCanotcome, " can't make it to dinner."));
guestList[1] = "kashif"; // change bilal with kashif
console.log("\nSecond Invitations:");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are invited to dinner. It would be an honor to have you join us."));
}
