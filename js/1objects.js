"use strict";

function convertClass(obj, key, cls) {
    var arr = obj[key].split(" ");

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr.splice(i, 1);
            i--;
        }
    }

    obj[key] = arr.join(" ");
    return obj;
}

function convertArray(arr) {
    var obj = {}, key;

    for (var i = 0; i < arr.length; i++) {
        key = arr[i];
        obj[key] = true;
    }

    return obj;
}

function convertObject(obj) {
    var arr = [], str;

    for (var key in obj) {
        str = key + ", " + obj[key];
        arr.push(str);
    }

    return arr;
}

// SCOPE POINTER
// =============

var obj = {
    key1: "cls1",
    key2: "cls2",
    key3: "cls3"
};

var arr = [1, 2, 4, 8, 16];

var output = [
    convertClass(obj, "key1", "cls1"),//0
    convertArray(arr),//1
    convertObject(obj),//2
];

console.log(output[2]);
