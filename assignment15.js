//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.



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
