class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left === null) {
			node.parent = this;
			this.left = node;
		}
		else if (this.right === null) {
			node.parent = this;
			this.right = node;
		}
	}

	removeChild(node) {
		if (node === this.left) {
			this.left = null;
			node.parent = null;
		}
		else if (node === this.right) {
			this.right = null;
			node.parent = null;
		}
		else throw new Error('Passed node is not a child of this node');
	}

	remove() {
		if (this.parent !== null) {
			this.parent.removeChild(this);
		}
	}
	//Hewson we have a problem
	swapWithParent() {
		const updateNodes = () => {
			const parentOfParent = this.parent.parent;
			const parentOfNode = this.parent;
			let brotherOfNode;
			const thisNode = this;
			const leftChild = this.left;
			const rightChild = this.right;

			//новые дети this и их родители
			if (this.parent.left === this && this.parent.right !== null) {
				brotherOfNode = this.parent.right;
				brotherOfNode.parent = this;
				this.right = brotherOfNode;
				this.left = this.parent;//dunno

			}
			if (this.parent.right === this) {
				brotherOfNode = this.parent.left;
				brotherOfNode.parent = this;
				this.left = brotherOfNode;
				this.right = this.parent;//dunno
			}

			//ребенок деда
			if (this.parent.parent !== null) {
				if (this.parent.parent.left === this.parent) {
					parentOfParent.left = this;
				} else if (this.parent.parent.right === this.parent) {
					parentOfParent.right = this;
				}
			}


			//родители детей
			if (leftChild !== null) {
				leftChild.parent = this.parent;
			}
			if (rightChild !== null) {
				rightChild.parent = this.parent;
			}

			//возврат значений
			this.parent.left = leftChild;
			this.parent.right = rightChild;
			const acc = this.parent.parent;
			this.parent.parent = this;
			this.parent = acc;
		};

		if (this.parent !== null) {
			updateNodes();
		}
	}
}

module.exports = Node;
