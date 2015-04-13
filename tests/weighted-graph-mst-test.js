var should = require('chai').should(),
    Graph = require('../lib/basic-algorithms').graph.Graph,
	weightedGraphMST = require('../lib/basic-algorithms').weightedGraphMST;

describe('Weighted Graph Minimum Spanning Tree algorithms: Prim', function() {

    var numV = 5;
    var myGraph;

    beforeEach(function(done) {
        myGraph = new Graph().withNumberVertices(numV);
		myGraph.addEdge(0,1,2);
		myGraph.addEdge(0,3,8);
		myGraph.addEdge(0,4,4);
		myGraph.addEdge(1,2,3);
		myGraph.addEdge(2,3,5);
		myGraph.addEdge(2,4,1);
		myGraph.addEdge(3,4,7);
        done();
    });

    it('should return a correct and ordered pred array', function(done) {
        var mst = weightedGraphMST.weightedMST(myGraph, 0);
		mst.predecessors.should.be.deep.equal([-1,0,1,2,2]);
		done();
    });

    it('should return a correct and ordered edge weight array', function(done) {
        var mst = weightedGraphMST.weightedMST(myGraph, 0);
		mst.weights.should.be.deep.equal([0,2,3,5,1]);
		done();
    });
});
