const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.size = 0;
	}
	//добавить новый элемент в кучу
	push(data, priority) { 
		const node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}
	//извлечь элемент с максимальным приоритетом?
	pop() {
		if (!this.isEmpty()) {

		}
		//10) returns data associated with root
		//11) calls detachRoot
		//12) calls restoreRootFromLastInsertedNode with detached root
		//13) calls shiftNodeDown with current heap root
	}

	detachRoot() {
		const detachedRoot = this.root;
		this.root.removeChild(this.root.left);
		this.root.removeChild(this.root.rigth);
		this.root = null;
		return detachedRoot;
	}

	restoreRootFromLastInsertedNode(detached) {
		//16) should remove last inserted node and assing it to root
		//17) should maintain correct state of parentNodes
		//18) should maintain correct order of parentNodes when right child is moved
	}

	size() {
		return this.size;
	}

	isEmpty() {
		return this.size === 0;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if (this.root === null) {
			this.root = node;
			this.parentNodes.push(node);
			this.size++;
		}
		//4) inserts nodes to correct places
		//5) maintains this.parentNodes in correct state
	}

	shiftNodeUp(node) {
	//	19) shifts node down until heap property is valid
	//	20) maintants parentNodes in correct state
	//	21) shifts node down in right direction
	//	22) calls Node.swapWithParent
	//	23) calls itself recursively
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
