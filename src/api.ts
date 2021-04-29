import express from "express";
import { PORT, DBURL } from "./config";
var cors = require('cors');
const app = express();
const {User} = require('./models/User');

app.use(cors());
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
const mongoose = require('mongoose');
mongoose.connect(`${DBURL}`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log(`Connected to DB ${DBURL}`)
})


app.post("/api/user/create", jsonParser, async (req, res) =>{
    const user = await User.create(req.body);

    res.json(user);
});

app.get("/api/client", (req, res) =>{


    res.json({
        person: {
            name: req.params.name,
            job: 'legend'
        }
    });
});

app.get("/api/favorit", (req, res) =>{


    res.json({
        person: {
            name: req.params.name,
            job: 'legend'
        }
    });
});


app.listen(PORT, ()=> console.log(`✅  Ready on port http://localhost:${PORT}`));

