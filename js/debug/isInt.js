"use strict";

var chai = require("chai");
var assert = chai.assert;

describe("isInt", function () {
    it("integer", function () {
        assert.equal(isInt(1), true);
    });
    it("float", function () {
        assert.equal(isInt(1.1), true);
    });
    it("string", function () {
        assert.equal(isInt("1"), true);
    });
    it("floatString", function () {
        assert.equal(isInt("1.1"), true);
    });
});

function isInt(int) {
    return !isNaN(parseFloat(int) && isFinite(int) && parseInt(int));
}
