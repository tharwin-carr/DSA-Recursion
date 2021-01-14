function wordCounter(sentence) {
    const words = sentence.split(/\W/).filter(Boolean);
    const hash = new Map();

    words.forEach(word => {
        if (hash.has(word)) {
            hash.set(word, hash.get(word) + 1); // if word exists in hash map increment counter by 1
        }
        else {
            hash.set(word, 1); // otherwise make a new key/value pair for word.
        }
    });

    const counter = []; //array that holds hash map results

    hash.forEach((value, key) => { //looping through the hash to get the key/value pair to display in counter
        counter.push(key + ' = ' + value);
    });

    return counter.join(', ');
}

console.log(wordCounter('Hello there, how are you? Can you tell me how to get to the nearest Starbucks?'));