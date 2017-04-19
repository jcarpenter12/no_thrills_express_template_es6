'use strict'

const express = require('express');
const path    = require('path');
const app     = express();

app.set('port', (process.env.PORT || 8080));
app.set("view engine", "pug");
app.use(express.static("public"));
app.set('views', path.join(__dirname, 'views'));

//Add your routes here
//#################################################
app.get('/', (req, res) => {
  res.render('index');
});

//PORT SETUP
app.listen(app.get('port'), () => {
  console.log("App is running at http://localhost:%d",app.get('port'));
});
