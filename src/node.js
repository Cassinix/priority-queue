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
		else {
      		this.right = null;
    	}
	}

	remove() {
		
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
