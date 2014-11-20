exports.concat_array = function(str, array) {
    return array.map(function(elm) {
        return str + ' ' + elm;
    });
};
