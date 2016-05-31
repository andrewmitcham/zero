"use strict";

function calculateExponent(int, exp) {
    var $exp = 1;

    for (var i = 0; i < exp; i++) {
        $exp *= int;
    }

    return $exp;
}

function calculateFactorial(fct) {
    var $fct = 1;

    for (var i = 0; i < fct; i++) {
        $fct += $fct * i;
    }

    return $fct;
}

function calculateFibonacci(fib) {
    var $fib = 1;

    for (var i = 1, x = 0; i < fib; i++) {
        $fib = $fib + x;
        x = $fib - x;
    }

    return $fib;
}

function calculatePercent(yrs, sum, prc) {
    var $prc = sum;

    for (var i = 0; i < yrs; i++) {
        $prc = $prc + ($prc * prc / 100);
    }

    return $prc - sum;
}

// SCOPE POINTER
// =============

var output = [
    calculateExponent(3, 3),//0
    calculateFactorial(5),//1
    calculateFibonacci(10),//2
    calculatePercent(10, 1000, 10),//3
];

console.log(output[3]);
