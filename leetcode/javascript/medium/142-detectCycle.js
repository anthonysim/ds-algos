var detectCycle = function (head) {
  if (head === null || head.next === null) return null;

  let slow = head;
  let fast = head;
  let pointer = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) break;
  }
  if (slow !== fast) return null;

  while (pointer !== slow) {
    pointer = pointer.next;
    slow = slow.next;
  }
  return slow;
};