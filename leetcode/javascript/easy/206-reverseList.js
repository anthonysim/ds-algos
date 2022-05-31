function reverseList(head) {
  let current = head;
  let prev = null;
  let temp = null;

  while (current) {
    temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};

// time: O(n)