const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public/'));
app.set('views','./public/');

const routesRegex = /^(?!\/public|\/js|js\/$).*/;
const indexData ={
    title: 'React training'
};

app.get(routesRegex,  function(req, res) { 
  res.render('index', { indexData: indexData });
});

console.log(new Date().toLocaleTimeString());
app.listen(8080);
