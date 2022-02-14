var removeElements = function (head, val) {
  while (head !== null && head.val === val) {
    head = head.next;
  }

  let current = head;
  while (current && current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
      // need an else statement because the "next" might equal the "val"
      // as well. So the shift doesn't happen until that's verfied to be
      // true or false;
    } else {
      current = current.next;
    }
  }
  return head;
};