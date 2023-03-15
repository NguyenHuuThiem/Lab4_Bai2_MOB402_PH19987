const express = require('express');
const exphbs  = require('express-handlebars');

var app = express();
app.listen(process.env.PORT || '3000'); 

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
    res.send('Hello world');
});

app.get('/handlebars', function(req, res){
    res.render('index');
});
