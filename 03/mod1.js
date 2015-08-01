var global_value;

exports.setGlobal = function(val) {
    global_value = val;
};

exports.returnGlobal = function() {
    console.log(global);
    return global_value;
};
