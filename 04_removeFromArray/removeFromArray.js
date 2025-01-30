const removeFromArray = function(arr, ...args) {
    new_arr = []
    arr.forEach(function(x){
        if(!args.includes(x)){
            new_arr.push(x);
        }
    })
    return new_arr;
};

// Do not edit below this line
module.exports = removeFromArray;
