/*
 * Basic Graph datastructure with unweighted edges
 *
 * The Vertices the following properties:
 * 		a String label,
 * 		an integer index,
 * 		boolean marked flag 
 */
(function(exports) {
    'use strict';

    exports.Vertex = function(indexNum, label) {
        this.marked = false;
        this.indexNum = indexNum;
        this.label = label;
    };


    exports.Vertex.prototype.isMarked = function() {
        return this.marked;
    };

    exports.Vertex.prototype.setMarked = function(marked) {
        this.marked = marked;
    };

    exports.Graph = function() {
		this.numEdges = 0;
        this.vertices = [];
        this.adjList = [];
    };

    exports.Graph.prototype.withNumberVertices = function(numV) {
        for (var i = 0; i < numV; i++) {
            this.vertices.push(new exports.Vertex(i, i.toString()));
            this.adjList.push([]);
        }
        return this;
    };

    exports.Graph.prototype.withVertexLabels = function(vertices) {
        for (var i = 0; i < vertices.length; i++) {
            this.vertices.push(vertices[i]);
            this.adjList.push([]);
        }
        return this;
    };

    exports.Graph.prototype.getNumberVertices = function() {
        return this.vertices.length;
    };

    exports.Graph.prototype.getNumberEdges = function() {
        return this.numEdges;
    };

    exports.Graph.prototype.getVertex = function(u) {
        return this.vertices[u];
    };

    exports.Graph.prototype.addEdge = function(u, v) {
		this.adjList[u].push(v);
		this.adjList[v].push(u);
		this.numEdges++;
    };

    /*
     * Get the adjacency list for given Vertex with index 'u'
     */
    exports.Graph.prototype.getAdjList = function(u) {
        return this.adjList[u];
    };

    exports.Graph.prototype.toString = function() {
        var str = "Graph with number Vertices: " + this.vertices.length + "\n"; 
        str += "Adjacency Lists:\n";
        for (var i = 0; i < this.adjList.length; i++) {
            str += "List at index " + i + ": " + this.adjList[i].toString() + "\n";
        }
		return str;
    };


    /*
     * Get the first unmarked Vertex from the adjacency list for
     *
     * Return undefined if list is undefined or all Vertices are marked
     * given Vertex with index 'u'
     */
    exports.Graph.prototype.getUnmarkedFromAdjList = function(u) {
        var list = this.adjList[u];
        for (var i = 0; i < list.length; i++) {
            if (!this.vertices[list[i]].isMarked()) {
                return list[i];
            }
        }
        return undefined;
    };

})(typeof window === 'undefined' ? module.exports : window);
