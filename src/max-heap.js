const Node = require('./node');

class MaxHeap {

    constructor() {
        this.root = null;
        this.parentNodes = [];
        this.sizeHeap = 0;
    }

    push(data, priority) {
        let node = new Node(data, priority);

        this.insertNode(node);
        this.shiftNodeUp(node);
    }

    pop() {
        if (this.isEmpty()) return;
        let detachedRoot = this.detachRoot();
        this.restoreRootFromLastInsertedNode(detachedRoot);
        if (this.root != null) {
            let newRoot = this.root;
            this.shiftNodeDown(newRoot);
        }
        return detachedRoot.data;
    }

    detachRoot() {
        let detachedRoot = this.root;
        let indexRoot = this.parentNodes.indexOf(detachedRoot);
        if (indexRoot > -1) {
            this.parentNodes.splice(indexRoot, 1);
        }

        this.root = null;
        this.sizeHeap--;
        return detachedRoot;

    }

    restoreRootFromLastInsertedNode(detached) {
        if (detached.right == null && detached.left == null) return;
        this.root = this.parentNodes.pop();
        let newRoot = this.root;


        if (newRoot != null) {
            if (newRoot === detached.right) {
                newRoot.left = detached.left;
                newRoot.left.parent = newRoot;
                newRoot.right = null;
                this.parentNodes.unshift(newRoot);
            }
            if (newRoot === detached.left) {
                newRoot.left = null;
                newRoot.right = null;
                this.parentNodes.unshift(newRoot);

            }
            if (newRoot !== detached.left && newRoot !== detached.right) {

                if (newRoot.parent.right === newRoot) {
                    this.parentNodes.unshift(newRoot.parent);
                    newRoot.parent.right = null;
                } else newRoot.parent.left = null;
                newRoot.left = detached.left;
                newRoot.right = detached.right;
                newRoot.left.parent = newRoot;
                newRoot.right.parent = newRoot;
            }

            newRoot.parent = null;
        }

    }

    size() {
        return this.sizeHeap

    }

    isEmpty() {
        if (this.parentNodes.length === 0) return true;
        else return false

    }

    clear() {
        this.root = null;
        this.parentNodes = [];

    }

    insertNode(node) {
        if (this.root === null) {
            this.root = node;
            node.parent = null;
            this.parentNodes[0] = node;
            this.sizeHeap++;
        } else {
            this.parentNodes[0].appendChild(node);
            this.parentNodes.push(node);
            if (this.parentNodes[0].right != null) this.parentNodes.shift();
            this.sizeHeap++;
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
        let maxChild;
        if (node == null) return;
        if (node.left == null && node.right == null) return;
        else {
            if (node.right == null) {
                maxChild = node.left;
            } else if (node.left.priority > node.right.priority) maxChild = node.left;
            else maxChild = node.right;
        }

        if (maxChild.priority > node.priority) {
            let indexChild = this.parentNodes.indexOf(maxChild);
            let indexParent = this.parentNodes.indexOf(node);
            if (indexChild > -1) this.parentNodes.splice(indexChild, 1, node);
            if (indexParent > -1) this.parentNodes.splice(indexParent, 1, maxChild);
            if (node === this.root) this.root = maxChild;

            maxChild.swapWithParent();
            this.shiftNodeDown(node);
        }


    }
}

module.exports = MaxHeap;