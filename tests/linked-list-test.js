var should = require('chai').should(),
    Node = require('../lib/basic-algorithms').node.Node,
    linkedList = require('../lib/basic-algorithms').node;

describe('Basic Linked List Node Functionality', function() {

    it('should create a new list with a single node', function(done) {
		var headNode = new Node(10);
		headNode.data.should.be.equal(10);
		should.not.exist(headNode.next);
		done();
    });

    it('should add nodes to the tail', function(done) {
		var headNode = new Node(10);
		headNode.addToTail(20);
		headNode.addToTail(30);
		headNode.next.data.should.be.equal(20);
		headNode.next.next.data.should.be.equal(30);
		done();
    });

    it('should delete a node matching a data input', function(done) {
		var headNode = new Node(10);
		var dataBeforeDel = 20;
		var dataDel = 30;
		var dataAfterDel = 40;
		headNode.addToTail(dataBeforeDel);
		headNode.addToTail(dataDel);
		headNode.addToTail(dataAfterDel);
		headNode.addToTail(50);
		headNode = linkedList.deleteNode(headNode, dataDel);
		headNode.data.should.not.equal(dataDel);
		var ptr = headNode;
		while(ptr.next !== null) {
			ptr.next.data.should.not.equal(dataDel);
			if(ptr.next.data === dataBeforeDel) {
				ptr.next.next.data.should.equal(dataAfterDel);
			}
			ptr = ptr.next;
		}
		done();
    });
});
