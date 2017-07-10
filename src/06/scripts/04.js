/**
 * Created by Alpha on 2017/7/10.
 */
var p = {x: 1};
var o=Object.create(p);
console.log(o.isPrototypeOf(p));
console.log(Object.prototype.isPrototypeOf(o));
console.log(Object.prototype.isPrototypeOf(p));

