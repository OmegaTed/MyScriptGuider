/**
 * Created by Alpha on 2017/7/6.
 */
var o = new Object();
var a = new Array();
var d = new Date();
var r = new RegExp("js");


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

var o = {x: 1, y: 2, z: 3};
o.propertyIsEnumerable("toString");
for (var p in o) {
    console.log(p);
}

for (var p in o) {
    if (!o.hasOwnProperty(p)) continue;
    if (typeof p === "function") continue;
    console.log(o[p]);
}

function extend(o, p) {
    for (var cp in p) {
        o[cp] = p[cp];
    }
    return o;
}

function merge(o, p) {
    for (var key in p) {
        if (o.hasOwnProperty(key)) continue;
        o[key] = p[key];
    }
    return o;
}
function restrict(o, p) {
    for (var key in o) {
        if (!(key in p)) delete o[key];
    }
    return o;
}
function subtract(o, p) {
    for (var key in p) {
        if (o.hasOwnProperty(key)) delete o[key];
    }
    return o;
}
function union(o, p) {
    return extend(extend({}, o), p);
}

function intersection(o, p) {
    return restrict(extend({}, o), p);
}
/**
 *
 * @param o
 * @returns {Array}
 */
function getKeys(o) {
    if(typeof  o !=="object") throw new TypeError("new error instance");
    var result=[];
    for (var key in o) {
        if(p.hasOwnProperty(key)) result.push(key);
    }
    return  result;
}