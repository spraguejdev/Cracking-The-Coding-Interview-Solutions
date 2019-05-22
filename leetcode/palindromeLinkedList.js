function reverse(head) {
  let newHead = null;
  while (head !== null) {
    const next = head.next;
    head.next = newHead;
    newHead = head;
    head = next;
  }
  return newHead;
}
var isPalindrome = function(head) {
  // reverse half;
  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let half = reverse(slow);
  while (head !== null && half !== null) {
    if (head.val !== half.val) {
      return false;
    }
    head = head.next;
    half = half.next;
  }
  return true;
};

var isPalindrome = function(head) {
  let answer = true;
  checkInReverse(head, head);
  return answer;

  function checkInReverse(lateNode) {
    if (lateNode) {
      const earlyNode = checkInReverse(lateNode.next);
      if (lateNode.val !== earlyNode.val) {
        answer = false;
      }
      return earlyNode.next;
    } else {
      return head;
    }
  }
};
