const Node = require('./node');

class MaxHeap {

    constructor() {
        this.root = null;
        this.parentNodes = [];
        this.counter = 0;
    }

    push(data, priority) {

        this.insertNode(new Node(data, priority));
        this.shiftNodeUp(new Node(data, priority));
    }

    pop() {

    }

    detachRoot() {

    }

    restoreRootFromLastInsertedNode(detached) {

    }

    size() {

    }

    isEmpty() {

    }

    clear() {

    }

    insertNode(node) {
        if (this.root == null) {
            this.root = node;
            this.parentNodes.push(this.root);
            return
        }
        if (this.counter != 1) {
            this.parentNodes[0].left = node;
            this.parentNodes.push(node);
            this.counter++;
        } else {
            this.parentNodes[0].right = node;
            this.parentNodes.splice(0, 1)
            this.parentNodes.push(node);
            this.counter = 0;
        }

    }

    shiftNodeUp(node) {
        while (node.parent && node.priority > node.parent.priority) {
            node.swapWithParent();
        }

    }

    shiftNodeDown(node) {

    }
}

module.exports = MaxHeap;