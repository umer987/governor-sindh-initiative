//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magician_names = ['umer', 'ahad', 'bilal', 'zain'];
show_magicians(magician_names);
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    // Create a new array with modified magician names
    var great_magicians = [];
    for (var _i = 0, magicians_3 = magicians; _i < magicians_3.length; _i++) {
        var magician = magicians_3[_i];
        great_magicians.push("".concat(magician, " the Great"));
    }
    return great_magicians;
}
// Create an array of magician's names
var magician_names = ['umer', 'ahad', 'bilal', 'zain'];
// Call make_great to modify the array
var great_magicians = make_great(magician_names);
// Call show_magicians to see that the list has actually been modified
show_magicians(great_magicians);
