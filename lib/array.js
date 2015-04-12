/*
 * Simple array content shifting functions for
 * instructional purposes 
 */

exports.shiftArrayRight = function(arr) {
	validateArray(arr);
    if (arr.length === 0) {
        return;
    }
    for (var i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = undefined;
};

exports.shiftArrayLeft = function(arr) {
	validateArray(arr);
    if (arr.length === 0) {
        return undefined;
    }
    var firstElement = arr[0];
    for (var i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = undefined;
    return firstElement;
};

function validateArray(arr) {
    if (arr === undefined) {
        throw Error('basic-algorithms.array Validation Error: Undefined array given as input');
    }
}
