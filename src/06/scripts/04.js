/**
 * Created by Alpha on 2017/7/10.
 */
var p = {x: 1};
var o=Object.create(p);
console.log(o.isPrototypeOf(p));
console.log(Object.prototype.isPrototypeOf(o));
console.log(Object.prototype.isPrototypeOf(p));

function classOf(o) {
    debugger;
    if(o===null) return "null";
    if(o===undefined) return "undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
}

console.log(classOf([]));
console.log(classOf(""));
console.log(classOf({}));
console.log(classOf(false));
console.log(classOf(1));
console.log(classOf(/./));
console.log(classOf(new Date()));
console.log(Window);
function newf() { }
console.log(classOf(newf));