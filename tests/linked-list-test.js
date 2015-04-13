var should = require('chai').should(),
    Node = require('../lib/basic-algorithms').node.Node;

describe('Basic Linked List Node Functionality', function() {

    it('should create a new list with a single node', function(done) {
		var linkedList = new Node(10);
		linkedList.data.should.be.equal(10);
		should.not.exist(linkedList.next);
		done();
    });

    it('should add nodes to the tail', function(done) {
		var linkedList = new Node(10);
		linkedList.addToTail(20);
		linkedList.addToTail(30);
		linkedList.next.data.should.be.equal(20);
		linkedList.next.next.data.should.be.equal(30);
		done();
    });
});
