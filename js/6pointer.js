"use strict";

function setObject() {
    var obj = {};

    Object.defineProperty(obj, "key", {
        value: "cls",
        configurable: true,
        writable: true,
        enumerable: false
    });
    obj.key = "";

    return obj;
}

function enterObject() {
    var obj = {};
    obj.key0 = "cls0";
    obj.key1 = "cls1";

    Object.defineProperty(obj, "key2", {
        get: function () {
            return this.key0 + " " + this.key1;
        },
        set: function (obj) {
            var split = obj.split(" ");
            this.key0 = split[0];
            this.key1 = split[1];
        }
    });
    obj.key2 = "cls2 cls3";

    return obj.key0;
}

// SCOPE POINTER
// =============

var output = [
    setObject(),//0
    enterObject(),//1
];

console.log(output[1]);

