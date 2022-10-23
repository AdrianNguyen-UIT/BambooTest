const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

const math = require("./math");

app.get("/", (req, res) => {
    res.status(200).send("Hello Class!");
});

app.get("/sum/:a&:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    try {
        res.status(200).send({
            data: math.sum(a, b),
            error: null,
        });
    } catch (err) {
        res.status(400).send({
            data: null,
            error: err.message
        });
    }
});


app.get("/sub/:a&:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    try {
        res.status(200).send({
            data: math.subtract(a, b),
            error: null,
        });
    } catch (err) {
        res.status(400).send({
            data: null,
            error: err.message
        });
    }
});

// Test skip ci
const port = 3000;
server.listen(port, () => {
    console.log('Server API listening at ' + `http://localhost:${port}`);
});
