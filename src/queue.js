const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.maxSize = maxSize;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if (heap.size < this.maxSize) {
			this.heap(data, priority);
		}
		else throw new Error('No no no! Heap is going to explode!');
	}

	shift() {

	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.size() === 0;
	}
}

module.exports = PriorityQueue;
