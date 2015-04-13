/*
 * Basic Graph algorithms
 *
 */
(function(exports) {

    'use strict';

    exports.weightedMST = function(graph, startVertexIndex) {
        validate(graph, startVertexIndex);
    };

    function validate(graph, startVertexIndex) {
        if (startVertexIndex === undefined || startVertexIndex < 0) {
            throw Error('Graph Search Error: start vertex index < 0 or undefined');
        } else if(graph.getNumberVertices() <= 0)  {
            throw Error('Graph Search Error: Graph has no vertices');
		}
    }

})(typeof window === 'undefined' ? module.exports : window);
