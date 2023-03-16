const express = require('express');
const exphbs  = require('express-handlebars');

var app = express();
app.listen(process.env.PORT || '3000'); 


app.engine('.hbs', exphbs());
app.set('view engine', '.hbs');

// app.get('/handlebars', function(req, res){
//     res.send('Hello world');
// });

app.get('/hbs', function(req, res){
    res.render('index');
});
