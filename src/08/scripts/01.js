/**
 * Created by Alpha on 2017/7/12.
 */
function printProps(o) {
    for (var key in o) {
        console.log(key + ":" + o[key] + "\n");
    }
}
function distance(x1, x2, y1, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx ^ 2 + dy ^ 2);
}
function factorial(n) {
    if (n <= 1) return 1;
    else
        return n * factorial(n - 1);

}
var o = {
    m: function () {
        var self = this;
        console.log(this === o);
        f();
        function f() {
            console.log(this === o);
            console.log(self === o);
        }
    }
};
o.m();


function getPropTypeNames(o, args) {
    if (args == null) args = [];
    for (var key in o) {
        args.push(key);
    }
    return args;
}

function max() {
    var max = Number.NEGATIVE_INFINITY;
    console.log(max);
    for (var i = 0; i < arguments.length; i++) {
        var obj = arguments[i];
        if (obj > max)
            max = arguments[i];
    }
    return max;
}

var largest = max(1, 2, 10, 100, 10, 10000);
console.log(largest);

/**
 *callee && caller
 */
function factorial(x) {
    console.log(x);
    if (x <= 1) return 1;
    x * arguments.callee(x - 1);
}

function flexisum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        var ele = arguments[i], n;
        if (ele == null) continue;
        if (Array.isArray(ele)) {
            n = flexisum.apply(this, ele);
        }
        else if (typeof ele == "function")
            n = Number(ele());
        else
            n = Number(ele);
        if (isNaN(n))
            throw Error("flexisum(); can`t  convert " + ele + "to Number");
        total += n;
    }
    return total;
}