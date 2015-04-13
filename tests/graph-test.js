var should = require('chai').should(),
    Graph = require('../lib/basic-algorithms').graph.Graph;
//Graph = require('../lib/graph').Graph;

describe('Graph Data Structure Behavior', function() {

    var numV = 10;

    it('should create create a graph with V vertices', function() {
        var numE = 0;
        var myGraph = new Graph().withNumberVertices(numV);
        myGraph.getNumberVertices().should.equal(numV);
        myGraph.getNumberEdges().should.equal(numE);
    });

    it('should create create a graph with V vertices initialized with zero Edges E', function() {
        var myGraph = new Graph().withNumberVertices(numV);
        for (var i = 0; i < numV; i++) {
            myGraph.getAdjList(i).length.should.equal(0);
        }
    });

    it('should add an edge E to both adjacency lists of connecting vertices V', function() {
        var myGraph = new Graph().withNumberVertices(numV);
        myGraph.addEdge(2, 4);
        myGraph.getAdjList(2).should.be.deep.equal([{from: 2, to: 4, weight: undefined}]);
        myGraph.getAdjList(4).should.be.deep.equal([{from: 4, to: 2, weight: undefined}]);
		myGraph.getNumberEdges().should.be.equal(1);
    });

    it('should find the first unmarked vertex V in an adjacency list', function() {
        var myGraph = new Graph().withNumberVertices(numV);
        myGraph.addEdge(2, 4);
        myGraph.getUnmarkedFromAdjList(2).should.be.equal(4);
        myGraph.getUnmarkedFromAdjList(4).should.be.equal(2);
    });
});
