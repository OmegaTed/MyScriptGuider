/**
 * Created by Administrator on 2017/7/10.
 */

var empty = [];
var primes = [2, 3, 5, 7, 11, 13, 17];
var misc = [1.1, true, "this is joke"];
var baseInt = 123;
var baseArr = [baseInt, baseInt + 1, baseInt + 2, baseInt + 3];

/**
 * 稀疏数组
 * */
var a = new Array(5);
a = [];
a[100] = 10010;

//console.log(JSON.stringify(a));


var arr = [1, 2, 3, 4];
Object.defineProperty(arr, "length", {writable: false});
arr.length=0;
//console.log(arr.length)

/**
 * 数组增加或者删除
 */
var arr=[1,2,3];
arr.push(4);
arr.push(5);
arr.push(6,7,8,9);

console.log(JSON.stringify(arr));

delete arr[1];
console.log(JSON.stringify(arr));

arr.splice(0,2,1,1,1,1);
console.log(arr);