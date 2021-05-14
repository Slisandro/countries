const server = require("express").Router();
const { Country, Activity } = require("../db.js");
const axios = require("axios");
const { Op } = require("sequelize");

server.get("/", async (req, res) => {
    const { name } = req.query;
    const arr = []

    if (!name) {
        Country.findAll()
            .then(resp => {
                if (!resp.length) {
                    axios.get("https://restcountries.eu/rest/v2/all")
                        .then((json) => {
                            json.data.map((el) => {
                                arr.push(
                                    Country.create({
                                        id: el.alpha3Code,
                                        name: el.name,
                                        image: el.flag,
                                        region: el.region,
                                        capital: el.capital,
                                        subregion: el.subregion,
                                        area: el.area,
                                        population: el.population,
                                    })
                                        .then(resp => resp)
                                )
                            })
                            Promise.all(arr).then((val) => res.status(200).send(val))
                        })
                } else {
                    return res.status(200).send(resp)
                }
            })
    } else {
        Country.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            },
        })
            .then(resp => res.status(200).send(resp))
    }
});

server.get("/:id", (req, res) => {
    const { id } = req.params;
    if (id) {
        Country.findOne({
            where: {
                id
            },
            include: [{
                model: Activity,
                as: 'activities'
            }]
        })
            .then(resp => {
                res.status(200).send(resp)
            })
            .catch(err => console.log(err))
    }
});

module.exports = server;
