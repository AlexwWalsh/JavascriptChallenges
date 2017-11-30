var numbers = [5, 9, 12.2, 19, 7, 6];
var max = 3

numbers.forEach(function (a){
  if (a > max){
    max = a
    console.log(a)
  } else {
      console.log(max)
  }
});

var numbers = [-5, 9, -12.2, -19, -7, 6];
var min = 20

numbers.forEach(function (a){
  if (a < min) {
    min = a
    console.log(a)
  } else {
      console.log(min)
  }
  });



  var numbers = [7, 5, 9, -1, -2, -3];
  var closestZero = Infinity

  numbers.forEach(function(element) {
    if (Math.abs(element) - Math.abs(closestZero) < 0) {
      return (closestZero = element)
      }
    });

    for (var i=0; i<10; i++) { console.log(i); }

    var i = 0
    while (i < 10) {
      console.log(i);
       i++
    }

    for (var a = 10; a > 0; a--) {
      console.log(a);
    }

    var arrayOne = [1, 3, 5];
    var arrayTwo = [2, 5, 7];
    var removed = [];
    var bigArray = arrayOne.concat(arrayTwo);



      var bigArray = bigArray.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
})

var arr = [2, 3, 3, 5, 6, 9, 9, 9, 9];

arr = arr.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });















  Math.min.apply(numbers)
