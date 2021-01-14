const powerCalculator = (base, exponent) => {
    //check if exponent is greater than 0
    if (exponent < 0) {
        return 'exponent must be greater than or equal to 0'
    };

    //Base case
    if (exponent === 0) {
        return 1;
    };

    //General case
    return base * powerCalculator(base, exponent - 1);
};

console.log(powerCalculator(10, 2))