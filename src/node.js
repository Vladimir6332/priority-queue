class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.parent = null;
        this.left = null;
        this.right = null;

    }

    appendChild(node) {
        if (this.left == null) {
            this.left = node;
            node.parent = this;

            return
        } else
        if (this.right == null) {
            this.right = node;
            node.parent = this;
        }

    }

    removeChild(node) {
        if (this.left === node) {
            this.left = null;
            node.parent = null;
            return
        }
        if (this.right === node) {
            this.right = null;
            node.parent = null;
            return
        } else throw new Error("Parent dont have this child!!!");

    }

    remove() {
        if (this.parent)
            this.parent.removeChild(this);

    }

    swapWithParent() {
        if (this.parent == null) return;
        let pp, pl, pr;
        pp = this.parent.parent;
        pl = this.parent.left;
        pr = this.parent.right;

        if (pp != null && this.parent === pp.left) { pp.left = this; } else if (pp != null && this.parent === pp.right) { pp.right = this; }

        if (this.right != null) {
            this.right.parent = this.parent;
            this.parent.right = this.right;

        } else { this.parent.right = null; }

        if (this.left != null) {
            this.left.parent = this.parent;
            this.parent.left = this.left;
        } else { this.parent.left = null; }

        this.parent.parent = this;


        if (pl === this) {
            this.left = this.parent;
            if (pr) {
                pr.parent = this;
                this.right = pr;
            } else { this.right = null; }
        } else {
            if (pr === this) {

                this.right = this.parent;
                pl.parent = this;
                this.left = pl;
            }
        }

        this.parent = pp;











    }

}

module.exports = Node;