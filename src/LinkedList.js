import Node from "./Node.js";
class LinkedList {
  #head;
  constructor() {
    this.#head = null;
  }
  getHead() {
    return this.#head;
  }
  append(value) {
    const newNode = new Node(value, null);

    if (this.#head === null) {
      this.#head = newNode;
      return;
    }

    let temp = this.#head;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    temp.nextNode = newNode;
  }
  prepend(value) {
    this.#head = new Node(value, this.#head);
  }

  size() {
    let temp = this.#head;
    let size = 0;

    while (temp !== null) {
      size++;
      temp = temp.nextNode;
    }

    return size;
  }
  head() {
    return this.#head;
  }
  tail() {
    if (!this.#head) return null;
    let temp = this.#head;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    return temp;
  }
  at(index) {
    if (index < 0) return null;
    let temp = this.#head;
    for (let i = 0; i < index; i++) {
      if (temp === null) return null;
      temp = temp.nextNode;
    }
    return temp;
  }

  pop() {
    if (this.#head === null) return null;

    if (this.#head.nextNode === null) {
      const popped = this.#head;
      this.#head = null;
      return popped;
    }

    let temp = this.#head;
    while (temp.nextNode.nextNode !== null) {
      temp = temp.nextNode;
    }

    const popped = temp.nextNode;
    temp.nextNode = null;
    return popped;
  }
  contains(value) {
    if (!this.#head) return false;
    let temp = this.#head;
    while (temp !== null) {
      if (temp.value === value) return true;
      temp = temp.nextNode;
    }
    return false;
  }
  find(value) {
    let temp = this.#head;
    let index = 0;

    while (temp !== null) {
      if (temp.value === value) return index;
      temp = temp.nextNode;
      index++;
    }

    return null;
  }
  toString() {
    let strList = "";
    let temp = this.#head;
    while (temp !== null) {
      strList += `( ${temp.value} ) -> `;
      temp = temp.nextNode;
    }
    strList += "null";
    return strList;
  }
  insertAt(value, index) {
    if (index < 0) return;
    const newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.#head;
      this.#head = newNode;
      return;
    }
    const prevNode = this.at(index - 1);
    if (prevNode === null) return;
    newNode.nextNode = prevNode.nextNode;
    prevNode.nextNode = newNode;
  }
  removeAt(index) {
    if (index < 0 || this.#head === null) return false;
    if (index === 0) {
      this.#head = this.#head.nextNode;
      return true;
    }
    const prevNode = this.at(index - 1);
    if (prevNode === null || prevNode.nextNode === null) return false;
    prevNode.nextNode = prevNode.nextNode.nextNode;
    return true;
  }
}
export default LinkedList;
