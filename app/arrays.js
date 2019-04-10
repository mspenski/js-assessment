exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  // should be able to find the index of an item in an array
  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },
  // should be able to sum the items of an array
  sum: function (arr) {
    var x = 0;

    for (var i = 0; i < arr.length; i++) {
      x += arr[i];
    }
    return x;

  },
  // should be able to remove all instances of a value from an array
  remove: function (arr, item) {

  },

  removeWithoutCopy: function (arr, item) {

  },
  // you should be able to add an item to the end of an array
  append: function (arr, item) {
    arr.push(item);
    return arr;
  },
  // you should be able to remove the last item of an array
  truncate: function (arr) {
    arr.pop();
    return arr;
  },
  // you should be able to add an item to the beginning of an array
  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },
  // you should be able to remove the first item of an array
  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {

  },

  insert: function (arr, item, index) {

  },

  count: function (arr, item) {

  },

  duplicates: function (arr) {

  },

  square: function (arr) {

  },

  findAllOccurrences: function (arr, target) {

  }
};
