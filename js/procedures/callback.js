"use strict";

var arr = [1, 2, 3, 4, 5];

var newArray = [];
arr.forEach(function (cls, i, item) {
    newArray.push(cls);
});

var filteredArray = arr.filter(function (cls, i, item) {
    return cls >= 3;
});

var checkedArray = arr.map(function (cls, i, item) {
    return arr.length;
});

var reduceArray = [];
arr.reduce(function (prv, cur, i, item) {
    reduceArray.push(prv + cur);
    return prv + cur;
}, 0);

// SCOPE POINTER
// =============

var output = [
    newArray,//0
    filteredArray,//1
    checkedArray,//2
    reduceArray,//3
];

console.log(output[3]);
