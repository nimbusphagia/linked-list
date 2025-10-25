import Node from "./Node.js";
class LinkedList {
  #head;
  constructor() {
    this.#head = null;
  }
  append(value) {
    const newNode = new Node(value, null);

    if (this.#head === null) {
      this.#head = newNode;
      return;
    }

    let temp = this.#head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }
  prepend(value) {
    this.#head = new Node(value, this.#head);
  }

  size() {
    let temp = this.#head;
    let size = 0;

    while (temp !== null) {
      size++;
      temp = temp.next;
    }

    return size;
  }
  head() {
    return this.#head;
  }
  tail() {
    let temp = this.#head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    return temp;
  }
  at(index) {
    if (index < 0) return null;
    let temp = this.#head;
    for (let i = 0; i < index; i++) {
      if (temp === null) return null;
      temp = temp.next;
    }
    return temp;
  }

  pop() {
    if (this.#head === null) return null;

    if (this.#head.next === null) {
      const popped = this.#head;
      this.#head = null;
      return popped;
    }

    let temp = this.#head;
    while (temp.next.next !== null) {
      temp = temp.next;
    }

    const popped = temp.next;
    temp.next = null;
    return popped;
  }
}
