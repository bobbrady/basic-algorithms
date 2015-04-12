/*
 * Basic Graph algorithms
 *
 */
(function(exports) {

    'use strict';

    var discovered = [];

    exports.depthFirstSearch = function(graph, startVertexIndex) {
        validate(graph, startVertexIndex);
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

    exports.getDiscoveredOrder = function() {
        return discovered;
    };

    function validate(graph, startVertexIndex) {
        if (startVertexIndex === undefined || startVertexIndex < 0) {
            throw Error('Graph Search Error: start vertex index < 0 or undefined');
        } else if(graph.getNumberVertices() <= 0)  {
            throw Error('Graph Search Error: Graph has no vertices');
		}
    }


})(typeof window === 'undefined' ? module.exports : window);
