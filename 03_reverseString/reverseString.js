const reverseString = function(input) {
    let output = "";
    let tempArray = input.split("");
    for (let i = input.length - 1; i >= 0; i--) {
        output += tempArray[i];
    }
    return output;

};

// Do not edit below this line
module.exports = reverseString;
