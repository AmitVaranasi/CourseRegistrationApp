const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');

const CorsOptioons = {
    origin: 'http://localhost:8081'
}

app.use(cors(CorsOptioons))
app.use(express.json())

const allroutes = require('./Router/mainrouter')

app.use('/api/students',allroutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;