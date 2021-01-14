/*- Input: `"Dad gave mom a Tesla as a racecar"`
- Output: `Dad, mom, racecar, 3 Palindromes`*/

function palindromeCheck(str) {
    if(str.length === 1) {
        return false;
    }

    str = str.toLowerCase();

    let reverseStr = '';

    for (let i = str.length - 1; i>= 0; i--) {
        reverseStr += str[i]
    }

    return reverseStr === str;    
}

function palindromeCounter(str) {
    const words = str.split(' ').filter(word => palindromeCheck(word));

    return words.join(', ') + `, ${words.length} Palindromes`
}

console.log(palindromeCounter('Dad gave mom a Tesla as a racecar'))