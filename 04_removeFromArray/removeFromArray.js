const removeFromArray = function (inputArray, toRemove) {
    let outputArray = [];
    const tempArray = Array.prototype.slice.call(arguments);
    let removeArray = tempArray.slice(1, tempArray.length);
    let includeBool = true;
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < removeArray.length; j++) {
            if (inputArray[i] === removeArray[j]) {
                includeBool = false;
                break;
            }
            else {
                includeBool = true;
            }
        }
        if (includeBool) {
            outputArray.push(inputArray[i]);
        }

    }
    return outputArray;

};

// Do not edit below this line
module.exports = removeFromArray;
