const server = require("express").Router();
const { User } = require("../db.js");
const axios = require("axios");
const { Op } = require("sequelize");

server.get("/", (req, res) => {
    User.findAll()
        .then(resp => {
            res.send(resp)
        })
})

server.post("/", (req, res) => {
    const { name, email, password } = req.body;

    User.findAll({ where: { email: email } })
        .then((arr) => {
            console.log("AAAAAAAAAA", arr)
            if (arr.length) {
                res.send({
                    error: 'Ya existe un usuario con este email'
                })
            } else {
                User.create({
                    name, email, password
                })
                    .then(() => {
                        res.send({
                            success: 'Usuario creado exitosamente'
                        })
                    })
            }
        })
})

server.post('/login', (req, res) => {
    const { email, password } = req.body;

    User.findOne({
        where: {
            email: email
        }
    })
        .then(user => {
            if (user.password === password) {
                return res.send({
                    user: user,
                    success: 'Ha iniciado sesión correctamente'
                })
            } else {
                return res.send({
                    error: 'Email o contraseña erroneos'
                })
            }

        })
})

module.exports = server;