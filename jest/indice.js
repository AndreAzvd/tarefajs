Array.min = function(array) {
    return Math.min.apply(Math, array);
};

Array.max = function(array) {
    return Math.max.apply(Math, array);
};

var random = [2, 3, 1, 4, 6, 5];
console.log( Array.min(random) );
console.log( Array.max(random) );