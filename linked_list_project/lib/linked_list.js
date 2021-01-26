// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let node = new Node(val)
        if (!this.head) {
            this.head = node
        }
        else {
            this.tail.next = node;
            }
        this.tail = node;
        this.length++;
        return this;
        }
        

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current

    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
        let current = this.head;
        newNode.next = current;
        this.head = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.head) return undefined;

        let current = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
        
        let newHead = current.next;
        this.head = newHead;
        
        }
        this.length--;
        return current;
    }

    // TODO: Implement the contains method here
    contains(target) {

        let current = this.head;

        while (current) {
            if (current.value === target) {
                return true
            }
            current = current.next
        }
        return false;

    }

    // TODO: Implement the get method here
    get(index) {

        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        
        while (counter !== index) {
            counter++;
            current = current.next
        }
        
        return current;



    }

    // TODO: Implement the set method here
    set(index, val) {
       let node = this.get(index);
       if (node) {
           node.value = val;
           return true;
       }
       else {
           return false
       }

    }

    // TODO: Implement the insert method here
    insert(index, val) {
      if (index < 0 || index >= this.length) return false;
      if (index === this.length) return !!this.addToTail(val);
      if (index === 0) return !!this.addToHead(val);

      const newNode = new Node(val);
      const prev = this.get(index - 1);
      const temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;


    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) {
            return this.removeHead();
        }

        if (index === this.length - 1) {
            return this.removeTail();
        }
        let currentNode = this.get(index)
        let prev = this.get(index - 1);
        let afterNode = this.get(index + 1);
        prev.next = afterNode;
        this.length--;
        return currentNode;

    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;