/**
 * Created by Administrator on 2017/7/11.
 */


var des = Object.getOwnPropertyDescriptor({x: 1}, "x");
console.log(des);


var random = {
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

var dest=Object.getOwnPropertyDescriptor(random,"otect");
console.log(dest);

var propDes=Object.getOwnPropertyDescriptor({},"x");
console.log(propDes);

var propStr=Object.getOwnPropertyDescriptor({},"toString");
console.log(propStr);


/**
 * valueOf
 * */

