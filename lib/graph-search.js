/*
 * Basic Graph algorithms
 *
 */
(function(exports) {

    'use strict';

    var discovered;

    exports.depthFirstSearch = function(graph, startVertexIndex) {
        validate(graph, startVertexIndex);
		discovered = [];
        var visitStack = [];
        var discoveredCounter = -1;
        graph.getVertex(startVertexIndex).setMarked(true);
        discovered[startVertexIndex] = ++discoveredCounter;
        visitStack.push(startVertexIndex);
        while (visitStack.length > 0) {
            var u = visitStack[visitStack.length - 1];
            var v = graph.getUnmarkedFromAdjList(u);
            if (v === undefined) {
                visitStack.pop();
            } else {
                graph.getVertex(v).setMarked(true);
                discovered[v] = ++discoveredCounter;
                visitStack.push(v);
            }
        }
    };


    exports.minSpanningTree = function(graph) {
		exports.depthFirstSearch(graph, 0);
		var edges = getMSTFromDiscovered();
		return edges;
    };

    exports.breadthFirstSearch = function(graph, startVertexIndex) {
        validate(graph, startVertexIndex);
		discovered = [];
        var visitQueue = [];
        var discoveredCounter = -1;
        graph.getVertex(startVertexIndex).setMarked(true);
        discovered[startVertexIndex] = ++discoveredCounter;
        visitQueue.push(startVertexIndex);
        while (visitQueue.length > 0) {
			var u = visitQueue.shift();
			var v;
			while((v = graph.getUnmarkedFromAdjList(u)) !== undefined) {
				graph.getVertex(v).setMarked(true);
                discovered[v] = ++discoveredCounter;
				visitQueue.push(v);
			}	
        }
    };

    exports.getDiscoveredOrder = function() {
        return discovered;
    };

	function getMSTFromDiscovered() {
		var edges = [];
		for(var i = 0; i < discovered.length-1; i++) {
			edges.push({'From': i, 'To': i+1});
		}
		return edges;
	}

    function validate(graph, startVertexIndex) {
        if (startVertexIndex === undefined || startVertexIndex < 0) {
            throw Error('Graph Search Error: start vertex index < 0 or undefined');
        } else if(graph.getNumberVertices() <= 0)  {
            throw Error('Graph Search Error: Graph has no vertices');
		}
    }


})(typeof window === 'undefined' ? module.exports : window);
