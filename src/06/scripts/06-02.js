/**
 * Created by Alpha on 2017/7/9.
 * @about getter && setter;
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

var o = {
    data_prop: undefined,
    get accessor_prop() {
        return this.data_prop;
    },
    set accessor_prop(val) {
        this.data_prop = val
    }
};

var p = {
    x: 1.0,
    y: 1.0,
    get r() {
        return Math.sqrt(this.x * this.x + this.y + this.y);
    },
    set r(val) {
        var oldVal = Math.sqrt(this.x * this.x + this.y + this.y);
        var ratio = val / oldVal;
        this.x *= ratio;
        this.y *= ratio;
    },
    get theta() {
        return Math.atan2(this.y, this.x);
    }
};

var q = inhert(p);
q.x = 1;
q.y = 1;
console.log(q.r);
console.log(q.theta);

var serialnum = {
    $n: 0,
    get next() {
        return this.$n++
    },
    set next(val) {
        if (val >= this.$n) this.$n = val;
        else  throw  new SyntaxError("序列号的值不能比当前值小");
    }
};

var radom = {
    get octet() {
        return Math.floor(Math.Random() * 256);
    },
    get uint16() {
        return Math.floor(Math.Radom() * 65536);
    },
    get int16() {
        return Math.floor(Math.random() * 65536) - 32768;
    }
};


var obj=Object.getOwnPropertyDescriptor({x:1},"x");
console.log(obj);