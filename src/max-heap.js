const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.nodeСount = 0;
		//this.heap = [];
	}
	//добавить новый элемент в кучу
	push(data, priority) {
		const node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}
	pop() {
		if (!this.isEmpty()) {

		}
		//10) returns data associated with root
		//11) calls detachRoot
		//12) calls restoreRootFromLastInsertedNode with detached root
		//13) calls shiftNodeDown with current heap root
	}

	detachRoot() {
		const detRoot = this.root;
		this.root = null;
		if (this.parentNodes.includes(detRoot)) {
			this.parentNodes.shift();
		}
		return detRoot;
	}

	restoreRootFromLastInsertedNode(detached) {
		//16) should remove last inserted node and assing it to root
		//17) should maintain correct state of parentNodes
		//18) should maintain correct order of parentNodes when right child is moved
	}

	size() {
		return this.nodeСount;
	}

	isEmpty() {
		return this.nodeСount === 0;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.nodeСount = 0;
	}

	insertNode(node) {
		if (this.root === null) {
			this.root = node;
			this.parentNodes.push(node);
		}
		else {
			this.parentNodes[0].appendChild(node);
			this.parentNodes.push(node);
			if (this.parentNodes[0].right !== null) {
				this.parentNodes.shift();
			}
		}
		this.nodeСount++;
	}


	shiftNodeUp(node) {
		if (node.parent) {
			if (node.priority > node.parent.priority) {
				const n = this.parentNodes.indexOf(node);
				if (this.parentNodes.indexOf(node.parent) > -1)
					this.parentNodes[this.parentNodes.indexOf(node.parent)] = node;
				this.parentNodes[n] = node.parent;
				node.swapWithParent();
				this.shiftNodeUp(node);
			}
		}
		else {
			this.root = node;
		}	
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
