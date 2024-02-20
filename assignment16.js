//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

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
