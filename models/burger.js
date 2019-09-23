var orm = require("../config/orm");

var burger = {
selectAll: function(cb) {
    orm.selectAll("burgers", function(res){
        cb(res);
    });
},
insertOne: function(cols, vals, cb) {
    orm.selectAll("burgers", cols, vals, function(res){
        cb(res);
    });
},
updateOne: function(objColCals, condition,cb) {
    orm.selectAll("burgers",objColCals, condition, function(res){
        cb(res);
    });
}
};
module.exports = burger;