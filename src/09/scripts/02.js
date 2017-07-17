/**
 * Created by Administrator on 2017/7/17.
 */

function inhert(p) {
    if (p === null) throw  new TypeError("object is null!");
    if (Object.create)
        return Object.create(p);
    var t = typeof p;
    if (t !== "object" && t !== "function") throw  new TypeError("error type!");
    function f() {
    }

    f.prototype = p;
    return new f();
}

function range(from, to) {
    range.methods = {
        includes: function (x) {
            return this.from <= x && this.to >= x;
        },
        foreach: function (f) {
            for (var i = Math.ceil(this.from); i <= this.to; i++) {
                f(i);
            }
        },
        toString: function () {
            return "from:" + this.from + "to:" + this.to;
        }
    };
    var r = inhert(range.methods);
    r.from = from;
    r.to = to;
    return r;
}

var r = range(1, 10);
console.log(r.includes(10));
r.foreach(console.log);
console.log(r.toString());

