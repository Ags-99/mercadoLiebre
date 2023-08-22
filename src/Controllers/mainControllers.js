const path = require("path");

const mainControllers = {
    mostrarHome: (req, res)=>{
        res.sendFile(path.join(__dirname, "../views/home.html"))
    },
    mostrarRegister: (req, res)=>{
        res.sendFile(path.join(__dirname, "../views/register.html"))
    },
    mostrarLogin: (req, res)=>{
        res.sendFile(path.join(__dirname, "../views/login.html"))
    }
}

module.exports = mainControllers;