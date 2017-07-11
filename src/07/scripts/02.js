/**
 * Created by Administrator on 2017/7/10.
 */
/**
 * reverse 方法
 */
var arr = [7, 3, 4, 2, 1];
arr.reverse();
console.log(arr);

/**
 * sort 方法
 */
arr.sort();
console.log(arr);

arr = ["apple", "banana", "peach", "watermelon", "lemon", "pear", "grape"];
console.log(arr);
arr.sort(function (a, b) {
    var v1 = a.toLowerCase();
    var v2 = b.toLocaleString();
    if (v1 < v2)  return -1;
    if (v1 > v2)  return 1;
    return 0;
})
console.log(arr);

/**
 *concat 方法
 */

arr = [1, 2, 3];
arr=arr.concat(4,5,6);
console.log(arr);
arr=arr.concat([4,5],[6,7]);
console.log(arr);

/**
 *splice 方法
 */
arr=[];
for (var i = 0; i < 20; i++) {
    arr.push(i);
}
console.log(arr);
/*
arr.splice(4);
console.log(arr);
arr.splice(1,2);
console.log(arr);
arr.splice(1,1);
console.log(arr);*/
arr.splice(4,0,'a','b');
console.log(arr);

arr.splice(4,4,[1,2],3);
console.log(arr);


 /**
  *push &pop
  */
 var stack=[];
// for (var i = 1; i < 11; i++) {
//     stack.push(i);
// }
console.log(stack);
console.log(stack.push(1,2));
console.log(stack.pop());
console.log(stack.push(3));
console.log(stack.pop());
console.log(stack.push([4,5]));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);


/**
 *unshift() 和 shift();
 */

arr=[];
console.log(arr.unshift(1));
console.log(arr.unshift(22));
console.log(arr.shift());
console.log(arr.unshift(3,[4,5]));
console.log(arr.shift());;
console.log(arr.shift());
console.log(arr.shift());

