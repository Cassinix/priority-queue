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
		node.parent = null;
    	if (this.left === node) {
     		this.left = null;
		} 
		else if (this.right === node) { 
      		this.right = null;
		}
		else throw 'Error: passed node is not a child of this node';
	}

	remove() {
		if (this.parent !== null) {
			this.parent.removeChild(this);
		}
	}
	//Hewson we have a problem
	swapWithParent() {
		//поменять сына деду
		//поменять родителей
		//поменять детей
		if (this.parent = null) {
			return;
		}
		else if (this.parent.left = this) {
			this.right = this.parent.right;
			this.left = this.parent;
			this.parent.parent = this;
			this.parent = this.parent.parent;
			this.parent.right = this.right;
			this.parent.left = this.left;
		}
		else if (this.parent.right = this) {
			this.right = this.parent;
			this.left = this.parent.left;
			this.parent.parent = this;
			this.parent = this.parent.parent;
			this.parent.right = this.right;
			this.parent.left = this.left;
		}
	}
}

module.exports = Node;
