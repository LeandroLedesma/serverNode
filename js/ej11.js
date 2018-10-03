const express = require('express')
const app = express()
const path = require('path')

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '../pages/index.html'));
});
app.get('/products', function(request, response) {
    response.sendFile(path.join(__dirname, '../pages/products.html'));
  });

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});