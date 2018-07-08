// const elementParser = require('./parsers/spec');
let app = {};

const fs = require('fs');
const path = require('path');

module.exports = {
    init: function(_app) {
        app = _app;

        //add all parser in directory ./parsers
        let files = fs.readdirSync(__dirname+'/lib/parsers');
        files.forEach(function(f) {
           let i = path.basename(f, '.js');
           i = i.replace(/_/g,'');
           let p = __dirname+'/lib/parsers/'+f;
           app.parsers[i] = p;
        });
    }
};

