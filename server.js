var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'index')));

app.listen(80, () => {
    console.log(`App listening at port 80`)
});
