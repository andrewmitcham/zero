"use strict";

function getArray() {
    var arr = [];

    for (var i = 0; i < 65536; i++) arr[i] = true

    return arr;
}

function getFunctionTime(lvl, fnc, arg) {
    var bit = 1024, time = new Date();

    for (var i = 0; i < lvl; i++) {
        for (var j = 0; j < bit; j++)  fnc(arg);
    }

    return new Date() - time;
}

function getLastDay(yrs, mth) {
    var day = new Date(yrs, mth + 1, 0);
    return day.getDate();
}

// SCOPE POINTER
// =============

var output = [
    getFunctionTime(1, getArray),//0
    getLastDay(1972, 1),//1
];

console.log(output[1]);
