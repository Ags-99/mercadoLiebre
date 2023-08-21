const express = require("express");
const mainRouters = require("./routers/mainRouters");
const app = express();
const PORT = 3002;


app.use(express.static("public"));

app.use(mainRouters)

app.listen(PORT || 3002, ()=> console.log(`Servidor escuchando en el puerto ${PORT}`));

