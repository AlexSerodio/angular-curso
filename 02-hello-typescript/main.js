var myVar = 'My var';
function myFunction(x, y) {
    return x + y;
}
// ES 6 ou ES 2015
var num = 2;
var PI = 3.14;
var numbers = [1, 2, 3];
numbers.map(function (n) {
    return n * 2;
});
numbers.map(function (n) { return n * 2; }); // ES 2015
var MyMath = /** @class */ (function () {
    function MyMath() {
    }
    MyMath.prototype.sum = function (x, y) {
        return x + y;
    };
    return MyMath;
}());
var n1 = 'sdade';
// n1 = 4;          // type error
