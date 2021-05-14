const server = require("express").Router();
const { Country, Activity } = require("../db.js");

server.post("/", (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body
    Activity.create({
        name,
        difficulty,
        duration,
        season
    })
        .then((act) => {
            countries.map((cat) => {
                Country.findAll({ where: { id: cat} })
                    .then((pais) => {
                        act.addCountry(pais[0]);
                    })

            })
            return act
        })
        .then(resp => {
            res.status(200).send(resp)
        })
        .catch(err => console.log(err));
})

server.get("/", (req, res) => {
    Activity.findAll({
        include: {
            model: Country,
        }
    })
    .then(resp => res.send(resp))
})

module.exports = server;