function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'it is shirt'; }
    console.log("Shirt Size: ".concat(size.toUpperCase()));
    console.log("Message: ".concat(message));
    console.log();
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'its  me');
