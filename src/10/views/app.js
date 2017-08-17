/**
 * Created With WebStorm
 * User:Administrator
 * Date:2017/8/17
 * Time:17:44
 */
console.log(123);
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '../lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

requirejs(['jquery-3.2.1', 'app/sub'],
    function ($, sub) {
        //jQuery, canvas and the app/sub module are all
        //loaded and can be used here now.
    });