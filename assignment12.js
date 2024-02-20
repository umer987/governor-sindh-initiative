Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var friends = ["umer", "ahad", "anas", "zain", "bilal"];
for (var i = 0; i < friends.length; i++) {
    console.log('hello, ${friends[i]} have a nice party');
}
