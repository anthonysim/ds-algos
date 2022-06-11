class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

//  find the middle
const is_palindromic_linked_list = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second half
  let prev = null;
  let temp = null;

  while (slow) {
    temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  let left = head;
  let right = prev;

  // go through each val of left and right and determine if true or false
  while (left && right) {
    if (left.value !== right.value) {
      return false;
    }
    left = left.next;
    right = right.next;
  }
  return true;
};


head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(2)

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`) // true

