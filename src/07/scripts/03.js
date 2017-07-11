/**
 * Created by Alpha on 2017/7/11.
 */
var arr = [];
for (var i = 0; i < 19; i++) {
    arr.push(i);
}
// arr.forEach(function (v, i, a) {
//     console.log(v);
//     console.log(i);
//     console.log(a);
// });

/**
 *map();
 */
arr = [1, 2, 3];
b = arr.map(function (x) {
    return x * x;
})
console.log(b);

/**
 *filter();
 */
arr = [5, 4, 3, 2, 1];
var smallValueArr = arr.filter(function (x) {
    return x < 3;
});
var maxValueArrs = arr.filter(function (x) {
    return x >= 3;
})

console.log(smallValueArr);
console.log(maxValueArrs);

/**
 *every()和some();
 */
arr = [1, 2, 3, 4, 5];
var result = arr.every(function (x) {
    return x < 10;
});

var filterResult = arr.every(function (x) {
    return x % 2 === 0;
});

console.log(result);
console.log(filterResult);

/**
 *reduce() & reduceRight();
 */
var sum = arr.reduce(function (x, y) {
    return x + y;
}, 0);
console.log(sum)
var muliti = arr.reduce(function (x, y) {
    return x * y;
}, 1);
console.log(muliti);
var max = arr.reduce(function (x, y) {
    return x > y ? x : y;
});
console.log(max);