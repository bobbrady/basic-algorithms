var assert = require('assert');
var arrayAlg = require('../lib/basic-algorithms');

describe('Array algorithms', function() {

    beforeEach(function() {
    });

    it('should shift all elements to the right (to current index + 1)', function() {
		var arr = [10, 20, 30, 40, 50];
		arrayAlg.shiftArray(arr);
        assert.deepEqual(arr, [undefined, 10, 20, 30, 40, 50]);
    });

});
