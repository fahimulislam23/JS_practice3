function multi(input){
    for(i = 1; i <= 10; i++){
        var finalValue = i * input;
        console.log(i, 'X', input, '=', i * input);
    }
    return finalValue;
}
var result = multi(13);