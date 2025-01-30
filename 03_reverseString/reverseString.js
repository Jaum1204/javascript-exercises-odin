const reverseString = function(word) {
    list = word.split('');
    list.reverse();
    word = list.join('');
    return word;
};

// Do not edit below this line
module.exports = reverseString;
