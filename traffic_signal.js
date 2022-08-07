// Write a function which show traffic signal

var signal = 'yellow';

//Using if-else condition
if(signal == 'red'){
    console.log('Do not try to cross. Ato sahos dekhabar jaio na, Gari maira dibo.');
}
else if(signal == 'yellow'){
    console.log('You should stop for a while. Let pass the vahicles first.');
}
else if(signal == 'green'){
    console.log('Now cross the road. you are out of danger now');
}
else{
    console.log('Nije gari kine calaw.');
}

//Using swift condition
switch(signal){
    case 'red':
        console.log('Do not try to cross. Ato sahos dekhabar jaio na, Gari maira dibo.');
        break;
    case 'yellow':
        console.log('You should stop for a while. Let pass the vahicles first.');
        break;
    case 'green':
        console.log('Now cross the road. you are out of danger now');
        break;
    default:
        console.log('Nije gari kine calaw.');
}