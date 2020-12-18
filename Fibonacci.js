const fibonacci = num => {
    // base case
    if (num === 2) {
      return [1, 1]
    }
  
    let fibArray = fibonacci(num - 1)
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2])
    return fibArray
  };
  
  console.log(fibonacci(10))