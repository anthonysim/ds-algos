function reorderList(head) {
  let slow = head;
  let fast = head.next;

  // slow and fast to find the middle of the list
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // cut of second portion of linked list
  let second = slow.next;
  slow.next = null;
  let prev = null;

  // reverse the second portion of linked list
  while (second) {
    let temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }

  // merge the two linked lists
  let first = head;
  second = prev;

  while (second) {
    let temp1 = first.next;
    let temp2 = second.next;

    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
};