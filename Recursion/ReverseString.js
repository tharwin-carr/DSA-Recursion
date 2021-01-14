const reverseString = (str) => {
    if (str === '') {
        return '';
    };

    const newChar = str[0];

    return reverseString(str.slice(1)) + newChar;
}

console.log(reverseString('tharwin'))