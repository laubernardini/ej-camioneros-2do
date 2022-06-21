const express = require('express');
const app = express();
const sequelize = require('./database/sequelize');
require('./database/associations');

const port = 3000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`App en http://localhost:${port}`)

    sequelize.sync({ force: true }).then(() => {
        console.log('DB connected')
    })
})