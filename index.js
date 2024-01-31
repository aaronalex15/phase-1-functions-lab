function distanceFromHqInBlocks(blockNumber) {
    const headquarters = 42;
    if (headquarters < blockNumber) {
        return blockNumber - headquarters
    } else {
        return headquarters - blockNumber
    }

}

function distanceFromHqInFeet(feetValue) {
    const HqinFeet = distanceFromHqInBlocks(feetValue) * 264
    return HqinFeet;


}

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264
    } else {
        return (start - destination) * 264
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance < 400) {
        return 0;
    } else if (distance >= 400 && distance < 2000) {
        return (distance - 400) * 0.02;
    } else if (distance >= 2000 && distance < 2500) {
        return 25;
    } else if (distance >= 2500) {
        return 'cannot travel that far';
    }
}
