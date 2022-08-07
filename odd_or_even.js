// Write a function which take a integer value as input and display whether this value is Odd or Even

//has return + has parameter
function oddOrEven(num){
    if(num % 2 == 0)
        return "even";
    return "odd";
}
var num = 13254631;
var checkNumber = oddOrEven(num);
console.log(checkNumber);

//No return + has parameter
function oddEven(num){
    const result = (num % 2 == 0) ? "even" : "odd";
    console.log(result);
}
oddEven(2);