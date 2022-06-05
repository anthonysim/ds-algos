function reverseLinkedList(head) {
  let current = head;
  let temp = null;
  let prev = null;

  while (current) {
    temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
}