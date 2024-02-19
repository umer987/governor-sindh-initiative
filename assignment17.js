var guestList = ["umer", "ahad", "anas", "zain", "bilal"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are invited to dinner."));
}
console.log("\ntable change .");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ",  you are not invited to dinner."));
}
console.log("\nInvitations for the two remaining guests:");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are still invited to dinner."));
}
guestList.pop();
guestList.pop();
console.log("\nUpdated Guest List:", guestList);
