var should = require('chai').should(),
    Graph = require('../lib/basic-algorithms').graph.Graph;
    //Graph = require('../lib/graph').Graph;

describe('Graph algorithms: Basic Datastructure Behavior', function() {
    it('should create create a graph with V vertices initialized with zero Edges E', function() {
		var numV = 10;
		var myGraph = new Graph().withNumberVertices(numV);
        myGraph.getNumberVertices().should.equal(numV);
    });

});
