/**
 * Created With WebStorm
 * User:Administrator
 * Date:2017/7/27
 * Time:15:12
 */
Range.prototype = {
    constructor: Range,
    includes: function (x) {
        return this.from <= x && this.x <= this.to;
    },
    foreach: function (f) {
        for (var i = Math.ceil(this.from); i <= this.to; i++) {
            if (typeof  f === "function")
                f(i);
        }
    },
    toString: function () {
        return "(" + this.from + "..." + this.to + ")";
    }
};

/**
 *defineClass
 */


function extend(o, p) {
    for (var cp in p) {
        o[cp] = p[cp];
    }
    return o;
}

function defineClass(constructor, methods, statics) {
    if (methods) extend(constructor, methods);
    if (statics) extend(constructor, statics);
    return constructor;
}

var simpleRange = defineClass(function (f, t) {
    this.f = f;
    this.t = t;
}, {
    including: function (x) {
        return this.f <= x && x < this.t;
    },
    toString: function () {
        return "(" + this.f + "..." + this.t + ")";
    }
}, {
    upTo: function (t) {
        return new simpleRange(0, t);
    }
});
