const sumAll = function(num1, num2) {
    let sum = 0;
    let tempArray = [];
    let temp1 = 0;
    let temp2 = 0;
    if (num1 > num2) {
        temp1 = num2;
        temp2 = num1;
    }
    else {
        temp1 = num1;
        temp2 = num2;
    }

    if (num1 < 0 || num2 < 0) return "ERROR";
    if (typeof num1 != "number" || typeof num2 != "number") return "ERROR";

    for (let i = temp1; i <= temp2; i++) {
        tempArray.push(i);
    }
    for (const num of tempArray) {
        sum += num;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
