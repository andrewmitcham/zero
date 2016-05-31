"use strict";

function strings() {
    var str = "Hello, World!";
    var arr = [
        str.toLowerCase(),
        str.toUpperCase(),
        str.substr(0, 5),
        str.slice(-6),
        str.charCodeAt(12),
    ];
    return arr;
}

function numbers() {
    var num = Math.round((1e16 * 100) / 100) / 1e8;
    var arr = [
        num.toFixed(4),
        num.toString(36),
        num.toLocaleString(),
        1e4, 1e-4, 1 / 0, -1 / 0,
    ];
    return arr;
}

function arrays() {
    var $arr = ["firstClass", "secondClass"];
    var arr = [
        $arr.pop(),
        $arr.push("cls"),
        $arr.shift(),
        $arr.unshift("cls"),
        $arr.join(", "),
        $arr.splice(0, 1, "class"),
        $arr.concat($arr),
    ];
    return arr[6];
}

function dates() {
    var dts = new Date(1972, 1, 1, 12, 59, 59, 999);
    dts.setMonth(dts.getMonth() - 1);
    dts.setFullYear(1970);
    return dts;
}

// SCOPE POINTER
// =============

var output = [
    strings(),//0
    numbers(),//1
    arrays(),//2
    dates(),//3

];

console.log(output[3]);
