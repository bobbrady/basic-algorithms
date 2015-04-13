/*
 * Basic Linked List Data Structure
 */
(function(exports) {

    'use strict';

    /*
     * Basic Node representation of a linked list
     *
     * @constructor
     * @param {Object} data, the data that the node carries
     */
    exports.Node = function(data) {
        this.data = data;
        this.next = null;
    };

    exports.Node.prototype.addToTail = function(data) {
        var tail = new exports.Node(data);
        var ptr = this;
        while (ptr.next !== null) {
            ptr = ptr.next;
        }
        ptr.next = tail;
    };

    exports.Node.prototype.toString = function() {
        return "{data: " + this.data + "}";
    };

    exports.Node.prototype.printLinkedList = function() {
        var ptr = this;
        console.log("Linked List Print Dump");
        while (ptr.next !== null) {
            console.log("Node: %s", ptr.toString());
            ptr = ptr.next;
        }
        console.log("Node: %s", ptr.toString());
    };

})(typeof window === 'undefined' ? module.exports : window);
