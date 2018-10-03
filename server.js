const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '/pages/index.html'));
});
app.get('/products', function(request, response) {
    response.sendFile(path.join(__dirname, '/pages/products.html'));
  });

  
  
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

/*const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/', (req, res) => res.sendFile (path.join(__dirname, 'index.html')))
app.get('/productos', (req, res) => res.sendFile (path.join(__dirname, 'productos.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))*/