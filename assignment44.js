//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items");
    }
    else {
        console.log("You ordered a sandwich with: ".concat(items.join(', '), "."));
    }
    console.log();
}
make_sandwich('Cheese');
make_sandwich('Tomato');
make_sandwich(); // No arguments
