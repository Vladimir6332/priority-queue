const Node = require('./node');

class MaxHeap {

    constructor() {
        this.root = null;
        this.parentNodes = [];
        this.counter = 0;
    }

    push(data, priority) {
        let node = new Node(data, priority);

        this.insertNode(node);
        this.shiftNodeUp(node);
    }

    pop() {
        if (this.root != null) {
            let detachedRoot = this.detachRoot();
            this.restoreRootFromLastInsertedNode(detachedRoot)
            return this.root.data;


        }
    }

    detachRoot() {
        let root = this.root;
        if (this.parentNodes.indexOf(root) > -1) this.parentNodes.shift();
        const detachedRoot = this.root;
        this.root = null;
        return detachedRoot;

    }

    restoreRootFromLastInsertedNode(detached) {
        this.root = this.parentNodes[this.parentNodes.length - 1];
        let root = this.root;

        if (root === detached.right) {
            root.left = detached.left;
            root.left.parent = root;
            root.right = null;
            this.parentNodes.pop();
            this.parentNodes.unshift(root);
        } else if (root === detached.left) {
            root.left = null;
            root.right = null;


        } else {
            this.parentNodes.pop();
            this.parentNodes.unshift(root.parent);
            root.left = detached.left;
            root.right = detached.right;
            root.left.parent = root.right.parent = root;
        }
        root.remove();













    }

    size() {

    }

    isEmpty() {

    }

    clear() {
        this.root = null;
        this.parentNodes = [];

    }

    insertNode(node) {
        if (this.root === null) {
            this.root = node;
            node.parent = null;
            this.parentNodes = [node];
        } else {
            this.parentNodes[0].appendChild(node);
            this.parentNodes.push(node);
            if (this.parentNodes[0].right != null) this.parentNodes.shift();
        }

    }

    shiftNodeUp(node) {
        if (node.parent && node.priority > node.parent.priority) {

            if (this.parentNodes[this.parentNodes.length - 1] === node && this.parentNodes[0] === node.parent) {
                this.parentNodes[0] = node;
                this.parentNodes[this.parentNodes.length - 1] = node.parent;
            } else if (this.parentNodes[0] === node) {
                this.parentNodes[0] = node.parent;
            }
            node.swapWithParent();
            if (node.parent == null) { this.root = node; }
            this.shiftNodeUp(node);

        }

    }

    shiftNodeDown(node) {

    }
}

module.exports = MaxHeap;