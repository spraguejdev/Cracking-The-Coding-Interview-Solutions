var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let result = new ListNode();
  if (l1.val < l2.val) {
    result.val = l1.val;
    result.next = mergeTwoLists(l1.next, l2);
  } else {
    result.val = l2.val;
    result.next = mergeTwoLists(l2.next, l1);
  }
  return result;
};

var mergeTwoLists = function(l1, l2) {
  let res = new ListNode();
  let cur = res;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = new ListNode(l1.val);
      l1 = l1.next;
      cur = cur.next;
    } else {
      cur.next = new ListNode(l2.val);
      l2 = l2.next;
      cur = cur.next;
    }
  }
  cur.next = l1 || l2;
  return res.next;
};
