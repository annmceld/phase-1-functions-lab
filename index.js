// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    let farePrice = 0
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        farePrice;
    }
    else if (distance > 400 && distance <= 2000) {
        farePrice = (distance - 400) * .02;
    }
    else if (distance > 2000 && distance <= 2500) {
        farePrice = 25;
    }
    else if (distance > 2500) {
        return "cannot travel that far";
    }
    return farePrice;
}