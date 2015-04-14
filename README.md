# Data Structures and Algorithms in JavaScript
Basic data structures and algorithms JavaScript implementations that can be used both as a Node.js package and a browser library.

The data structures and algorithms were implemented from psuedo code found in various texts given below.  The particular style of an algorithm was selected by big-O performance and ease of understanding/coding (e.g, Prim's MST algorithm with node weight key and predecessor arrays).

* [Algorithms 4Ed by Sedgewick](http://www.amazon.com/Algorithms-4th-Edition-Robert-Sedgewick/dp/032157351X/ref=pd_sim_b_12?ie=UTF8&refRID=1QRCYT69X2QVASG6RHWH "Algorithms 4Ed by Sedgewick")
* [Data Structures and Algorithms in Java 2Ed by LaFlore](http://www.amazon.com/Data-Structures-Algorithms-Java-2nd/dp/0672324539/ref=sr_1_sc_1?s=books&ie=UTF8&qid=1429019878&sr=1-1-spell&keywords=Algorithms+laflore "Data Structures and Algorithms in Java by LaFlore")
* [Algorithms in a Nutshell by Heinman](http://www.amazon.com/Algorithms-Nutshell-OReilly-George-Heineman-ebook/dp/B0043D2EGI/ref=sr_1_1?s=books&ie=UTF8&qid=1429019949&sr=1-1&keywords=Algorithms+in+a+nutshell "Algorithms in a Nutshell by Heinman")

## Usage

* Install Node.js
* Clone this repo
* Place scripts where Node's require can find it
* Require the data structures and algorithm functions you need
* Read and run the tests to see how it works

## View The Current Functionality Provided
```shell
$ node
> require('./basic-algorithms')
{ array: { shiftArrayRight: [Function], shiftArrayLeft: [Function] },
  graph: { Edge: [Function], Vertex: [Function], Graph: [Function] },
  graphSearch: 
   { depthFirstSearch: [Function],
     minSpanningTree: [Function],
     breadthFirstSearch: [Function],
     getDiscoveredOrder: [Function] },
  weightedGraphMST: { MinSpanningTree: [Function], weightedMST: [Function] },
  node: { Node: [Function], deleteNode: [Function] } }
> 
```
## Read the Annotated Code to Learn the API
```javascript
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
```
## Example Usage with Mocha-Chai Test
```javascript
var should = require('chai').should(),
    Graph = require('../lib/basic-algorithms').graph.Graph,
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


```
