/**
 * Created With WebStorm
 * User:Administrator
 * Date:2017/7/27
 * Time:15:12
 */
function Complex(real, imaginary) {
    if (isNaN(real) || isNaN(imaginary))
        throw  new TypeError();
    else {
        this.r = real;
        this.i = imaginary;
    }
}

Complex.prototype.add = function (that) {
    return new Complex(this.r + that.r, this.i + that.i);
}

function typeOfValue(val) {
    if (!val) return "";
    switch (val.constructor) {
        case Number:
            return "Number: " + val;
            break;
        case String :
            return "String: " + val;
            break;
        case Date :
            return "Date: " + val;
            break;
        case RegExp :
            return "RegExp: " + val;
            break;
    }
}

console.log(typeOfValue(/\s/g));

Function.prototype.getName = function () {
    if ("name " in this) return this.name;
    else
        this.name = this.toString().match(/function\s*([^(]*)\(/)[1];
}