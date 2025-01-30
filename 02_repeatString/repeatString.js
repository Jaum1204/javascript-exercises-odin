const repeatString = function(str,num) {
    let tot = '';
    if (num < 0){
        return "ERROR";
    }
    for(let i = 0; i < num; i++){
        tot += str;
    }
    return tot;
};

// Do not edit below this line
module.exports = repeatString;
