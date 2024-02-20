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
