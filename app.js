// Módulos externos -> En primer lugar
const express = require("express");
const emoji = require("emoji-whale");
const cowsay = require("cowsay2");
const owl = require("cowsay2/cows/owl");
const whale = require("cowsay2/cows/whale");
const fetch = require("node-fetch");


const app = express()
const port = 3000

app.set('view engine', 'pug'); // Qué motor de vistas va a usar ('pug')
app.set('views','./views'); // Ruta de la carpeta donde van a estar guardadas las 'views'
app.use(express.json()); // Permite leer el body recibido en una petición




// GET
app.post("/", (req, res) => {
  const msj = "Has enviado un POST";
  console.log(msj);
  res.send(msj);
})


// POST
app.post("/", (req, res) => {
  const msj = "Has enviado un POST";
  console.log(msj);
  res.send(msj);
})


// DELETE
app.delete("/", (req, res) => {
  const msj = "Has enviado un DELETE";
  console.log(msj);
  res.send(msj);
})




/////// API products


// GET
app.get('/products/:id?', async (req, res) => {
  if (req.params.id) {
    try {
      let response = await fetch(`https://fakestoreapi.com/products/${req.params.id}`); // {object}
      let products = await response.json(); // {object}
      res.render('products', { 'products': [products] }); // Pinta datos en PUG
    }
    catch (error) {
      console.log(`ERROR: ${error.stack}`);
    }
  } else {
    try {
      let response = await fetch(`https://fakestoreapi.com/products`); // [array]
      let products = await response.json(); // [array]
      res.render('products', { products}); // Pinta datos en PUG
    }
    catch (error) {
      console.log(`ERROR: ${error.stack}`);
    }
  }
})



// POST
app.post('/products', async (req, res) => {
  console.log("Esto es el console.log de lo que introducimos por postman", req.body); // Objeto recibido de producto nuevo
  const newProduct = req.body; // {} nuevo producto a guardar

  // Líneas para guardar en una BBDD o MongoDB
  let response = await fetch('https://fakestoreapi.com/products', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newProduct)
  })
  let answer = await response.json(); // objeto devuelto de la petición
  console.log("Este es el console.log de lo que devuelve la API", answer);

  res.send(`Producto ${answer.title} guardado en el sistema con ID: ${answer.id}`);
});






app.listen(port, () => {
  console.log(cowsay.say(`Mi servidor funciona en http://localhost:${port}`, { cow: whale }));
});