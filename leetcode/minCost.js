var minCostClimbingStairs = function(cost) {
  for (let i = 2; i < cost.length; i++) {
    cost[i] += Math.min(cost[i - 1], cost[i - 2]);
  }

  return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
};

var minCostClimbingStairs = function(cost) {
  var f1 = 0;
  var f2 = 0;
  var f0;
  for (let i = cost.length - 1; i >= 0; i--) {
    f0 = cost[i] + Math.min(f1, f2);
    f2 = f1;
    f1 = f0;
  }
  return Math.min(f1, f2);
};
