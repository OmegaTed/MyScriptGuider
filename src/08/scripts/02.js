/**
 * Created by Alpha on 2017/7/13.
 */
function square(x) {
    var result = x ^ 2;
    console.log(result);
}
square(6);


function add() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function operate(operator, operand1, operand2) {
    return operator(operand1, operand2);
}
var i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));
console.log(i);

/**
 *operators
 */

var operators = {
    add: function (x, y) {
        return x + y;
    },
    subtract: function (x, y) {
        return x - y;
    },
    multiply: function (x, y) {
        return x * y;
    },
    divide: function (x, y) {
        return x / y;
    },
    pow: Math.pow
};

function operate2(operation, operand1, operand2) {
    if (typeof operators[operation] === "function")
        return operators[operation](operand1, operand2);
    else
        throw "unkown operator";
}

var conactStr = operate2("add", "hello", operate2("add", "", "world!"));
console.log(conactStr);


function factorial(n) {
    if (isFinite(n) && n > 0 && n == Math.round(n)) {
        if (!(n in factorial))
            factorial[n] = n * factorial(n - 1);
        return factorial[n];
    }
    else
        return NaN;
}
console.log(factorial(2) == 2);