const connection = require('./connection.js');
const orm = {
    selectAll: function(table, cb) {
        const queryString = 'SELECT * FROM ' + table + ';';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },


    insertOne: function(table, column, burger_name, cb) {
        var queryString = 'INSERT INTO' + table + '(' + column + ') VALUES (?)';
        connection.query(queryString, [burger_name], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function(table, col, colVal, condition, conditionVal, cb) {
        var queryString = 'UPDATE ' + table + ' SET ' + col + '=?' + 'WHERE ' + condition + '=?';
        connection.query(queryString, [colVal, conditionVal], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    deleteOne: function(table, condition, conditionVal, cb) {
        var queryString = 'DELETE FROM ' + table + ' WHERE ' + condition + '=?';
        connection.query(queryString, [conditionVal], function(err, data) {
            if (err) throw err;
            cb(result);
        });
    }
};



module.exports = orm;