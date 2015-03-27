var assert = require('chai').assert,
    arrayAlg = require('../lib/basic-algorithms');

describe('Array algorithms: shiftArrayRight', function() {

    it('should shift all elements to the right (to current index + 1)', function() {
        var arr = [10, 20, 30, 40, 50];
        arrayAlg.shiftArrayRight(arr);
        assert.deepEqual(arr, [undefined, 10, 20, 30, 40, 50]);
    });

    it('should do nothing if the array is empty', function() {
        var arr = [];
        arrayAlg.shiftArrayRight(arr);
        assert.deepEqual(arr, []);
    });

    it('should shift array w/one element to index 1 and leave undefined at index 0', function() {
        var arr = [10];
        arrayAlg.shiftArrayRight(arr);
        assert.deepEqual(arr, [undefined, 10]);
    });

    it('should throw an Error if an undefined array is passed as input', function() {
        var arr;
        assert.throw(function() {
            arrayAlg.shiftArrayRight(arr);
        }, 'basic-algorithms.array Validation Error: Undefined array given as input');
    });
});

describe('Array algorithms: shiftArrayLeft', function() {

    it('should shift all elements to the left (to current index - 1) and return the element at index 0', function() {
		var firstElement = 10;
        var arr = [firstElement, 20, 30, 40, 50];
        var firstElementReturned = arrayAlg.shiftArrayLeft(arr);
        assert.deepEqual(arr, [20, 30, 40, 50, undefined]);
        assert.equal(firstElementReturned, firstElement);
    });

    it('should do nothing if the array is empty', function() {
        var arr = [];
        arrayAlg.shiftArrayLeft(arr);
        assert.deepEqual(arr, []);
    });

    it('should shift array w/one element to index 1 and leave undefined at last index', function() {
		var firstElement = 10;
        var arr = [firstElement];
        var firstElementReturned = arrayAlg.shiftArrayLeft(arr);
        assert.deepEqual(arr, [undefined]);
        assert.equal(firstElementReturned, firstElement);
    });

    it('should throw an Error if an undefined array is passed as input', function() {
        var arr;
        assert.throw(function() {
            arrayAlg.shiftArrayLeft(arr);
        }, 'basic-algorithms.array Validation Error: Undefined array given as input');
    });
});
