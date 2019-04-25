const BinarySearchTree = require("./binarySearchTree");

// // helper function to get the last nth digit of a number
// var getDigit = function(num,nth){
//   // get last nth digit of a number
//   var ret = 0;
//   while(nth--){
//     ret = num % 10
//     num = Math.floor((num - ret) / 10)
//   }
//   return ret
// }

// // radixSort
// radixSort(list){
//   var max = Math.floor(Math.log10(Math.max.apply(Math,list))),
//       // get the length of digits of the max value in this array
//       digitBuckets = [],
//       idx = 0;

//   for(var i = 0;i<max+1;i++){

//     // rebuild the digit buckets according to this digit
//     digitBuckets = []
//     for(var j = 0;j<list.length;j++){
//       var digit = getDigit(list[j],i+1);

//       digitBuckets[digit] = digitBuckets[digit] || [];
//       digitBuckets[digit].push(list[j]);
//     }

//     // rebuild the list according to this digit
//     idx = 0
//     for(var t = 0; t< digitBuckets.length;t++){
//       if(digitBuckets[t] && digitBuckets[t].length > 0){
//         for(j = 0;j<digitBuckets[t].length;j++){
//           list[idx++] = digitBuckets[t][j];
//         }
//       }
//     }
//   }
//   return list
// }

// var kthSmallest = function(root, k) {
//   var tmp;
//   var arr = [];
//   var que = [];
//   que.push(root);
//   while (que.length) {
//     tmp = que.shift();
//     if (tmp.left) {
//       que.push(tmp.left);
//     }
//     if (tmp.right) {
//       que.push(tmp.right);
//     }
//     arr.push(tmp.value);
//   }

//   var sorted = arr.sort((a, b) => {
//     return a - b;
//   });
//   return sorted[k - 1];
// };

function kthSmallest(root, k) {
  var result;
  var count = 0;
  var countNodes = node => {
    if (!node) return;
    countNodes(node.left);
    count++;
    if (count === k) {
      result = node.value;
      return;
    }
    countNodes(node.right);
  };
  countNodes(root);
  return result;
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(6);
tree.insert(8);
tree.insert(3);
tree.insert(15);
console.log(kthSmallest(tree.root, 4));
