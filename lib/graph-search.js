/*
 * Basic Graph algorithms
 *
 */
(function(exports) {

    'use strict';

    var discovered = [];

    exports.depthFirstSearch = function(graph, startVertexIndex) {
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

})(typeof window === 'undefined' ? module.exports : window);
