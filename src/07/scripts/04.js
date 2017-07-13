/**
 * Created by Administrator on 2017/7/12.
 */
/**
 *indexOf & lastIndexOf
 */
function findall(arr, x) {
    var result = [], len = arr.length, pos = 0;
    while (pos < len) {
        pos = arr.indexOf(x, pos);
        if (pos === -1)break;
        result.push(pos);
        pos += 1;
    }
    return result;
}

function isArrayLike(o) {
    if (o
        && typeof o == "object"
        && isFinite(o.length)
        && o.length >= 0
        && o.length === Math.floor(o.length)
        && o.length <= 2 ^ 32)
        return true;
    else
        return false;
}

function isArrayCheck() {
    return typeof o === "object"
        && Object.prototype.toString.call(o).slice(8, -1).toLowerCase() === "array";
}

Array.isArray = Array.isArray || function (o) {
        return typeof o === "object"
            && Object.prototype.toString.call(o).slice(8, -1).toLowerCase() === "array";
    };

