var myVar = 'My var';

function myFunction(x: number, y: number) {
    return x + y;
}

// ES 6 ou ES 2015
let num = 2;
const PI = 3.14;



var numbers = [1, 2, 3];

numbers.map(function(n) {
    return n * 2;
});

numbers.map(n => n * 2);    // ES 2015

class MyMath {
    sum(x: number, y: number) {
        return x + y;
    }
}

var n1 = 'sdade';
// n1 = 4;                  // type error