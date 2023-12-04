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

	size() {
		let item = this.first;
		let count = 0;
		while (item !== null) {
			count += 1;
			item = item.next;
		}
		return count;
	}

	head() {
		return this.first;
	}
	tail() {
		return this.last;
	}
	at(index, list = this.first) {
		if (list === null) {
			return null;
		}
		if (index === 0) {
			return list;
		} else {
			index--;
			return this.at(index, list.next);
		}
		// let item = this.first;
		// while (index > 0 && item !== null) {
		// 	item = item.next;
		// 	index--;
		// }
		// return item;
	}
	pop() {
		let item = this.first;
		while (item.next !== this.last) {
			item = item.next;
		}
		this.last = item;
		this.last.next = null;
	}
	contains(value, list = this.first) {
		//creates a copy of this.first at first iteration
		if (list === null) {
			return false;
		} else {
			if (list.value === value) {
				return true;
			}
			return this.contains(value, list.next);
		}
	}
	find(value) {
		let item = this.first;
		let index = 0;
		while (item !== null && item.value !== value) {
			item = item.next;
			index++;
		}
		return item === null ? null : index;
	}
	insertAt(index, value) {
		const newNode = new Node(value);
		const previous = this.at(index - 1);
		newNode.next = previous.next;
		previous.next = newNode;
	}
	removeAt(index) {
		const previous = this.at(index - 1);
		previous.next = previous.next.next;
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

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend("start");
list.append("end");
// list.pop();
// console.log(list.toString());
// console.log(list.contains(3));
// console.log(list.contains("end"));
// console.log(list.find("start"));
//list.insertAt(2, "middle!");
//list.removeAt(4);
