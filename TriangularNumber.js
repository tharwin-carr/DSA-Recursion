const triangularNumber = (num) => {
    //base case
    if (num === 0) {
        return 0
    }

    //general case
    return num + triangularNumber(num - 1)
}

console.log(triangularNumber(6))