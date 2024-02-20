//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.




var current_users = ['umer', 'ahad', 'anas', 'zain', 'bilal'];
var new_users = ['adnan', 'rehan', 'Sarah', 'asma', 'wahid'];
var _loop_1 = function (new_username) {
    var usernameExists = current_users.some(function (current_username) { return current_username.toLowerCase() === new_username.toLowerCase(); });
    if (usernameExists) {
        console.log("Sorry, the username '".concat(new_username, "' is already taken. Please choose a different one."));
    }
    else {
        console.log("Great! The username '".concat(new_username, "' is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    _loop_1(new_username);
}
