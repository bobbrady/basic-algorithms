/*
 * Basic Weighted Graph Algorithms
 */
(function(exports) {

    'use strict';
/*
 * MinSpanningTree: Wrapper object containing the Minimum Spanning Tree (MST)
 * results for a graph: predecessor array and edge weights array.
 *
 * @constructor
 * @param {Array} pred, the predecessor array of vertices
 * @param {Array} key, the final array of edge weights keyed by vertex logical id
 */
    exports.MinSpanningTree = function(pred, key) {
        this.predecessors = pred;
        this.weights = key;
    };

/*
 * weightedMST: Finds the Minimum Spanning Tree for a weighted graph.
 *
 * Amazon link to "Algorithms in a Nutshell", an O'Reilly book
 * http://www.amazon.com/Algorithms-Nutshell-In-OReilly/dp/059651624X/ref=tmm_pap_title_0?ie=UTF8&qid=1428939214&sr=1-1
 *
 * YouTube video with example of algorithm used:
 * https://www.youtube.com/watch?v=z1L3rMzG1_A
 *
 * @param {Array} pred, the predecessor array of vertices
 * @param {Array} key, the final array of edge weights keyed by vertex logical id
 * @return {MinSpanningTree} a wrapper object around the predecessor and edge weight arrays
 */
    exports.weightedMST = function(graph, startVertexIndex) {
        validate(graph, startVertexIndex);
        var key = [];
        var pred = [];
        var queue = [];
        for (var i = 0; i < graph.getNumberVertices(); i++) {
            key[i] = Number.POSITIVE_INFINITY;
            pred[i] = -1;
            queue.push(i);
        }
        key[startVertexIndex] = 0;
        while (queue.length > 0) {
            var u = getMin(queue, key);
            var adjList = graph.getAdjList(u);
            var v = -1;
            var w = -1;
            for (i = 0; i < adjList.length; i++) {
                v = adjList[i].to;
                if (queue.indexOf(v) > -1) {
                    w = adjList[i].weight;
                    if (w < key[v]) {
                        pred[v] = u;
                        key[v] = w;
                    }
                }
            }
        }
        var mst = new exports.MinSpanningTree(pred, key);
        return mst;
    };


    /*
     * 		Find and remove the vertex having the minimum key (edge weight) value
     * 		in the vertex queue
     * 		
     * 		WARNING: as-is, the search for min is O(n) where n = number elements
     * 		in the queue.
     *
     * 		TODO: replace simple array queue with a heap-based one
     *
     * 		@param {Array} queue, a queue have vertices eligible for MST inclusion
     * 		@param {Array} key, an array of edge weights indexed by vertix logical id
     * 		@return {Number}: the vertix with the minimum key (edge weight)
     */
    function getMin(queue, key) {
        var minIdx = 0;
        var u = queue[minIdx];
        var min = key[u];
        for (var i = 1; i < queue.length; i++) {
            if (key[queue[i]] < min) {
                min = key[queue[i]];
                minIdx = i;
            }
        }
        u = queue.splice(minIdx, 1)[0];
        return u;
    }

    function validate(graph, startVertexIndex) {
        if (startVertexIndex === undefined || startVertexIndex < 0) {
            throw Error('Graph Search Error: start vertex index < 0 or undefined');
        } else if (graph.getNumberVertices() <= 0) {
            throw Error('Graph Search Error: Graph has no vertices');
        }
    }

})(typeof window === 'undefined' ? module.exports : window);
