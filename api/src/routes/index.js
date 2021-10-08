const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require("./countries")
const activity = require("./activity")
const users = require("./users")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countries);
router.use("/activity", activity);
router.use("/users", users);

module.exports = router;
