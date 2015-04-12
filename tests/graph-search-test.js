var should = require('chai').should(),
    Graph = require('../lib/basic-algorithms').graph.Graph;
graphSearch = require('../lib/basic-algorithms').graphSearch;

describe('Graph Search algorithms: Depth First', function() {

    var numV = 7;
    var myGraph;

    beforeEach(function(done) {
        myGraph = new Graph().withNumberVertices(numV);
        myGraph.addEdge(0, 1);
        myGraph.addEdge(0, 2);
        myGraph.addEdge(1, 3);
        myGraph.addEdge(1, 4);
        myGraph.addEdge(2, 5);
        myGraph.addEdge(2, 6);
        done();
    });

    it('should visit all vertices in a connected graph', function(done) {
        graphSearch.depthFirstSearch(myGraph, 0);
        for (var i = 0; i < numV; i++) {
            myGraph.getVertex(i).isMarked().should.be.equal(true);
        }
		done();
    });

    it('should discover all vertices in depth first order', function(done) {
        graphSearch.depthFirstSearch(myGraph, 0);
        graphSearch.getDiscoveredOrder().should.be.deep.equal([0, 1, 4, 2, 3, 5, 6]);
		done();
    });

    it('should throw an Error on start vertex < 0 or undefined ', function(done) {
        should.throw(function() {
        graphSearch.depthFirstSearch(myGraph, -1);
        }, 'Graph Search Error: start vertex index < 0 or undefined');
		done();
    });

    it('should throw an Error on input graph has no vertices', function(done) {
		myGraph = new Graph();
        should.throw(function() {
        graphSearch.depthFirstSearch(myGraph, 0);
        }, 'Graph Search Error: Graph has no vertices');
		done();
    });
});


describe('Graph Search algorithms: Breadth First', function() {

    var numV = 7;
    var myGraph;

    beforeEach(function(done) {
        myGraph = new Graph().withNumberVertices(numV);
        myGraph.addEdge(0, 1);
        myGraph.addEdge(0, 2);
        myGraph.addEdge(1, 3);
        myGraph.addEdge(1, 4);
        myGraph.addEdge(2, 5);
        myGraph.addEdge(2, 6);
        done();
    });

    it('should visit all vertices in a connected graph', function(done) {
        graphSearch.breadthFirstSearch(myGraph, 0);
        for (var i = 0; i < numV; i++) {
            myGraph.getVertex(i).isMarked().should.be.equal(true);
        }
		done();
    });

    it('should discover all vertices in breadth first order', function(done) {
        graphSearch.breadthFirstSearch(myGraph, 0);
        graphSearch.getDiscoveredOrder().should.be.deep.equal([0, 1, 2, 3, 4, 5, 6]);
		done();
    });

    it('should throw an Error on start vertex < 0 or undefined ', function(done) {
        should.throw(function() {
        graphSearch.breadthFirstSearch(myGraph, -1);
        }, 'Graph Search Error: start vertex index < 0 or undefined');
		done();
    });

    it('should throw an Error on input graph has no vertices', function(done) {
		myGraph = new Graph();
        should.throw(function() {
        graphSearch.breadthFirstSearch(myGraph, 0);
        }, 'Graph Search Error: Graph has no vertices');
		done();
    });
});


describe('Graph Search algorithms: Minimum Spanning Tree', function() {

    var numV = 5;
    var myGraph;

    beforeEach(function(done) {
        myGraph = new Graph().withNumberVertices(numV);
        myGraph.addEdge(0, 1);
        myGraph.addEdge(0, 2);
        myGraph.addEdge(0, 3);
        myGraph.addEdge(0, 4);
        myGraph.addEdge(1, 2);
        myGraph.addEdge(1, 3);
        myGraph.addEdge(1, 4);
        myGraph.addEdge(2, 3);
        myGraph.addEdge(2, 4);
        myGraph.addEdge(3, 4);
        done();
    });

    it('should visit all vertices in a connected graph', function(done) {
        graphSearch.minSpanningTree(myGraph);
        for (var i = 0; i < numV; i++) {
            myGraph.getVertex(i).isMarked().should.be.equal(true);
        }
		done();
    });

    it('should discover all vertices in depth first order', function(done) {
        graphSearch.minSpanningTree(myGraph);
        graphSearch.getDiscoveredOrder().should.be.deep.equal([0, 1, 2, 3, 4]);
		done();
    });

    it('should discover E = (V - 1) edges', function(done) {
        graphSearch.minSpanningTree(myGraph);
        var mstEdges = graphSearch.getDiscoveredOrder().length - 1;
        mstEdges.should.equal(numV-1);
		done();
    });

    it('should return the mst edges', function(done) {
        var mstEdges =graphSearch.minSpanningTree(myGraph);
         mstEdges.should.be.deep.equal([
			{"From": 0, "To": 1},
			{"From": 1, "To": 2},
			{"From": 2, "To": 3},
			{"From": 3, "To": 4}
		]);
		done();
    });

    it('should throw an Error on input graph has no vertices', function(done) {
		myGraph = new Graph();
        should.throw(function() {
        graphSearch.minSpanningTree(myGraph);
        }, 'Graph Search Error: Graph has no vertices');
		done();
    });
});
