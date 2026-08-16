function isElevatorSafe(weights) {
    // Write your code here
    if (!Array.isArray(weights)) {
        return "Invalid";
    }

    let TotalweightIs = 0;
    for( let i = 0; i < weights.length; i++) {
        TotalweightIs += weights[i];
    }

    let bool = false;

    if(TotalweightIs <= 400) {
        return bool = true;
    } else {
        return bool = false;
    }
}