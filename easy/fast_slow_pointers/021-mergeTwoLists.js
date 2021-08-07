var mergeTwoLists = function (l1, l2) {
  let tempNode = new ListNode(0);

  let current = tempNode;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1) {
    current.next = l1;
  }

  if (l2) {
    current.next = l2;
  }
  return tempNode.next;
};