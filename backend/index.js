const express = require("express");
const cors = require("cors");

const app = express();

var streaming = [];

app.use(cors());
// app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.post("/publish", async (req, res) => {
    const idx = streaming.findIndex(el => el == req.body.name);
    if (idx !== -1) {
        console.log("duplicate streaming key:", req.body.name);
        res.sendStatus(409);
    }
    console.log("publish name:", req.body.name);
    streaming.push(req.body.name);
    console.log("streaming:", streaming);
    res.sendStatus(204);
});

app.post("/done", async (req, res) => {
    console.log("done name:", req.body.name);
    const idx = streaming.findIndex(el => el == req.body.name);
    if (idx === -1) {
        console.log("streaming key not found: ", req.body.name);
        res.sendStatus(404);
    }
    streaming.splice(idx, 1);
    console.log("streaming:", streaming);
    res.sendStatus(204);
});

app.get("/api/streams", async (req, res) => {
    res.send(streaming);
});

app.listen(5000, () => {
    console.log("api port: 5000");
});