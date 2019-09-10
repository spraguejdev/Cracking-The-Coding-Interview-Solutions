// Compose takes in two functions and returns the value of the results of the two functions
var add1 = val => val + 1;
var multipleBy5 = val => val * 5;

var compose = (...fns) => val => fns.reduceRight((memo, fn) => fn(memo), val);

var composed = compose(
  add1,
  multipleBy5
);

console.log(composed(5));

// Another way to write compose

var compose = function(add, multiple) {
  var fns = arguments;

  // var fns = Array.prototype.slice.call(arguments);
  return function(val) {
    for (let i = fns.length - 1; i >= 0; i--) {
      val = fns[i](val);
    }
    return val;
  };
};

var composed2 = compose(multipleBy5);

console.log(composed2(4));
