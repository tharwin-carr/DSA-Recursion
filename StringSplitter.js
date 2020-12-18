const stringSplitter = (string, splitter) => {
    //base case
    if(string.indexOf(splitter) === -1) {
        return [string.slice(0, string.length)]
    }

    //general case

    return [
        string.slice(0, string.indexOf(splitter)),
    ...stringSplitter(string.slice(string.indexOf(splitter) + 1), splitter),        
    ]
}

console.log(stringSplitter("02/20/2020", "/"))