// Code your solution in this file!
function distanceFromHqInBlocks(someValue){

    return someValue >= 42 ? someValue - 42 : 42 - someValue;

}

function distanceFromHqInFeet(someValue){

    return someValue >= 42 ? (someValue - 42) * 264 : (42 - someValue) * 264;

}

function distanceTravelledInFeet(start, finish){
    return (start - finish) * 264 < 0 ? ((start - finish) * 264) * - 1 : (start - finish) * 264; 

}

function calculatesFarePrice(start, destination){

    let traveFeet = distanceTravelledInFeet(start, destination);

    let distance = traveFeet - 400;

    return traveFeet > 400 && traveFeet < 2000 ? distance * 0.02 : traveFeet > 2000 && traveFeet < 2500 ? 25 : traveFeet < 400 ? 0 : 'cannot travel that far';
    
}