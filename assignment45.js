function createCar(manufacturer, model) {
    var otherArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otherArgs[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    otherArgs.forEach(function (arg) {
        var _a = Object.entries(arg)[0], key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
var myCar = createCar('Toyota', 'Corolla', { color: 'blue' }, { sunroof: true });
console.log(myCar);
// Prints: 
// {
//   manufacturer: 'Toyota',
//   model: 'Corolla', 
//   color: 'blue',
//   sunroof: true
// }
