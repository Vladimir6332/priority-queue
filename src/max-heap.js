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
        this.parentNodes[0].appendChild(node);
        this.parentNodes.push(node);
        if (this.parentNodes[0].right) this.parentNodes.splice(0, 1);
    }

    shiftNodeUp(node) {
        if (node.parent && node.priority > node.parent.priority) {
            if (this.parentNodes[this.parentNodes.length - 1] === node) {
                this.parentNodes[0] = node;
                this.parentNodes[this.parentNodes.length - 1] = node.parent;
            } else if (this.parentNodes[0] === node) {
                this.parentNodes[0] = node.parent;
            }
            node.swapWithParent();
            this.shiftNodeUp(node);
            if (node.parent == null) this.root = node;
        }

    }

    shiftNodeDown(node) {

    }
}

module.exports = MaxHeap;