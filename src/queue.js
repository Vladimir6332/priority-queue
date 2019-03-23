const MaxHeap = require('./max-heap.js');

class PriorityQueue {
    constructor(maxSize = 30) {
        this.maxSize = maxSize;
        this.heap = new MaxHeap();
    }

    push(data, priority) {
        if (this.size() == this.maxSize) throw new ExceptionQueue("Queue has max size.");
        else
            this.heap.push(data, priority);

    }

    shift() {
        if (this.isEmpty()) throw new ExceptionQueue("Queue is emty.");
        else
            return this.heap.pop();

    }

    size() {
        return this.heap.size();


    }

    isEmpty() {
        return this.heap.isEmpty();

    }

    ExceptionQueue(message) {
        this.message = message;
        this.name = "Exception queue:";
    }

}

module.exports = PriorityQueue;