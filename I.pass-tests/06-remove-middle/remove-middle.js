// questioon 

function removeMiddle(words) {
    const index = words.length - 3;
    const middleWord = [];
    middleWord.push(words[index]);
    if (index > -1) {
        words.splice(index, 1);
    }
    return middleWord;
};