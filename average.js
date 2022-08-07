// Write a function which take three integer value as input and return average of those values

function numbers(num1, num2, num3){
        var total = num1 + num2 + num3;
        var average = total / 3;   
        return average; 
}

var num1 = 50;
var num2 = 10;
var num3 = 15;

var make_avg = numbers(num1, num2, num3);
console.log(make_avg);
