var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  // get to middle of linked list
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // reverse linked list started at middle of linked list
  let prev;
  let temp;
  while (slow) {
    temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }
  // if the vals don't equal to each other, return false, otherwise return true
  let left = head;
  let right = prev;
  while (right) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }
  return true;
};