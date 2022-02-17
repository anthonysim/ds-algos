function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}


var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

    // dividing by 10 to find the number thats over 10 that's carried to the next iteration
    carry = Math.floor(sum / 10);

    // modulo by 1- to find the number that's placed into linkedlist
    curr.next = new ListNode(sum % 10);

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;

    curr = curr.next;
  }
  return dummy.next;
};

let list1 = new ListNode(2);
list1.next = new ListNode(4);
list1.next.next = new ListNode(3);

let list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);

console.log(addTwoNumbers(list1, list2));

// Time complexity : O(max(m,n)). Assume that mm and nn represents the length of l1l1 and l2l2 respectively, the algorithm above iterates at most \max(m, n)max(m,n) times.

// Space complexity : O(max(m,n)). The length of the new list is at most \max(m,n) + 1max(m,n)+1.