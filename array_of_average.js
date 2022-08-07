// Write a function which will take an array of integers and the size of that array and return the average of those values

//Using for loop
var numbers = [50, 10, 10];
var total = 0;

for(var i = 0; i < numbers.length; i++){
    total += numbers[i];
}

var make_array_avg = total / numbers.length;
console.log(make_array_avg);


//Using Function
function ArrayAvg(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
}
    return summ / ArrayLen;
}
var myArray = [30, 45, 65, 76, 87, 90, 30];
var a = ArrayAvg(myArray);
console.log(a)