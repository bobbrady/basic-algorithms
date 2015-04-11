var should = require('chai').should(),
    Graph = require('../lib/basic-algorithms').graph.Graph;
    graphSearch = require('../lib/basic-algorithms').graphSearch;

describe('Graph Search algorithms: Depth First', function() {

    it('should visit all vertices in a connected graph', function() {
        var numV = 7;
        var myGraph = new Graph().withNumberVertices(numV);
		myGraph.addEdge(0,1);
		myGraph.addEdge(0,2);
		myGraph.addEdge(1,3);
		myGraph.addEdge(1,4);
		myGraph.addEdge(2,5);
		myGraph.addEdge(2,6);
		graphSearch.depthFirstSearch(myGraph, 0);
		for(var i = 0; i < numV; i++) {
			myGraph.getVertex(i).isMarked().should.be.equal(true);
		}
    });

    it('should discover all vertices in depth first order', function() {
        var numV = 7;
        var myGraph = new Graph().withNumberVertices(numV);
		myGraph.addEdge(0,1);
		myGraph.addEdge(0,2);
		myGraph.addEdge(1,3);
		myGraph.addEdge(1,4);
		myGraph.addEdge(2,5);
		myGraph.addEdge(2,6);
		graphSearch.depthFirstSearch(myGraph, 0);
		graphSearch.getDiscoveredOrder().should.be.deep.equal([0,1,4,2,3,5,6]);
    });
});



