/**
 * Created by Alpha on 2017/7/10.
 */
var o = {x: 1};
console.log("x" in o);
console.log("y" in o);
console.log("toString" in o);


var oo = {x: 1};
console.log(oo.hasOwnProperty("x"));
console.log(oo.hasOwnProperty("y"));
console.log(oo.hasOwnProperty("toString"));


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

var newo = {x: 1};
newo = inhert({y: 2});
newo.x = "001";

console.log(newo.propertyIsEnumerable("x"));

console.log(newo.propertyIsEnumerable("y"));

console.log(Object.prototype.propertyIsEnumerable("toString"));
