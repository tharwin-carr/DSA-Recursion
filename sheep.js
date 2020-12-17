const countSheep = function(sheepNum) {
    //Base case 
    if (sheepNum === 0) {
        console.log('All sheep jumped over the fence');
        return;
    }
    //General case
    console.log(sheepNum + ':Another sheep jumps over the fence');
    return countSheep(sheepNum - 1);
}

countSheep(3);