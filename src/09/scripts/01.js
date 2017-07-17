/**
 * Created by Administrator on 2017/7/17.
 */

/**
 *08.07.01
 */
function checkes() {
    var actual = arguments.length;
    var excepted = arguments.callee.length;
    if (actual !== excepted)
        throw  new TypeError("Excepted:" + excepted + "args;got:" + actual);
}

function fnc(x, y, z) {
    checkes();
    return x + y + z;
}

/**
 *call && apply
 */

f.call(o);
f.apply(o);

