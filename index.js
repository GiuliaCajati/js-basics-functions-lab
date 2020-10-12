// Code your solution in this file!
const distanceFromHqInBlocks = (block) => {
    if (block > 42) {
        return block - 42;
    } else {
        return 42 - block;
    }
}


const distanceFromHqInFeet = (block) => {
    let distance = distanceFromHqInBlocks(block);
    return (distance * 264);
}

const distanceTravelledInFeet = (start, destination) => {
    return (Math.abs((destination - start) * 264));
}

const calculatesFarePrice = (start, destination) => {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        //first 400 feet are free
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        //charges 2 cents per foot when total 
        //feet travelled is between 400 and 2000
        return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
        //25 dollars for a distance over 2000 feet
        return 25;
    } else {
        //does not allow rides over 2500 feet
        return 'cannot travel that far';
    }
}