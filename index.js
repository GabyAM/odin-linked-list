class LinkedList {
	constructor() {
		this.last = null;
		this.first = null;
	}

	append(value) {
		const newNode = new Node(value);
		if (this.last === null) {
			this.first = newNode;
		} else {
			this.last.next = newNode;
		}
		this.last = newNode;
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.first;
		this.first = newNode;
	}
	toString() {
		let string = "";
		let item = this.first;
		while (item !== null) {
			string += `(${item.value}) -> `;
			item = item.next;
		}
		return (string += "null");
	}
}

class Node {
	constructor(value = null) {
		this.value = value;
		this.next = null;
	}
}
// list.pop();
// console.log(list.contains(3));
// console.log(list.contains("end"));
// console.log(list.find("start"));
//list.insertAt(2, "middle!");
//list.removeAt(4);
