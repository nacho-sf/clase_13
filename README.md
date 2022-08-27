# clase_13
Express: Fetch + Middlewares

-Instalación de POSTMAN (registro o Log con Google)

-Se crea en visual un otros métodos, aparte de GET:

-"app.post" y "app.delete" (líneas 56 y 64)



-Para hacer un GET a una API externa:

    -Se ha copiado un código GET para hacer peticiones a fakestoreapi.com

    -Se ha copiado un PUG_template para mostrar los datos requeridos (se observa que se pueden hacer bucles dentro del propio PUG)

    -Para que funcione hay que instalar "fetch" en "NodeJS" por que no es nativo. Terminal "npm install node-fetch@2" (@2: versión anterior)

    -Escribir la importación del módulo, en la parte superior de la ventana "app.js": const fetch = require("node-fetch");

    -Al introducir las dirección (localhost:3000/products) en el navegador o en POSTMAN, devuelve un array de objetos correspondientes con los productos de la URL. La dirección/"número" devuelve el objeto especificado.



-Para hacer un POST en una API externa:

    -Se ha copiado un código POST para hacer peticiones a fakestoreapi.com

    -Se copia debajo del Motor de vistas de PUG la línea: "app.use(express.json());". Esto permite leer el body

    -Al ser un POST, no se puede postear desde el navegador, a no ser que se tenga algún formulario renderizado para recoger los datos. Por esto, se hará desde POSTMAN

    -En POSTMAN, se selecciona la opción POST > Body > raw > tipo JSON.

    -Se copia uno de los objetos de fakestoreapi para tener la estructura, se pega en el textarea de POSTMAN y se sustituyen los datos por los que se quieran.

    -La dirección de la petición será: localhost:3000/products