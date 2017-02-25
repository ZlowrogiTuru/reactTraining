const express = require('express');
const app = express();
app.use(express.static('public/'));
console.log(new Date().toLocaleTimeString());
app.listen(8080);
