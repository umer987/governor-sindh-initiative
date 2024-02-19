var guestList = ["umer", "ahad", "anas", "zain", "bilal"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are invited to dinner."));
}
console.log("we are makin dinner bigger");
guestList.unshift("shahmeer"); // Add at the beginning
guestList.splice(2, 0, "sufyan"); // Add in the middle
guestList.push("mohid"); // Add at the end
// Print new set of invitations
console.log("New  Invitations:");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are invited to dinner."));
}
