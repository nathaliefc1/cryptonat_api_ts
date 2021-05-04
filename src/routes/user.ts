import express from "express";
const {Profile} = require('../models/profile');
const router = express.Router();

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

router.post("/create", jsonParser, async (req, res) =>{
    const user = await Profile.create(req.body);

    res.json(user);
});

router.get("/profile", (req, res) =>{


    res.json({
        person: {
            name: req.params.name,
            cryptocurrency: 'bitcoin'
        }
    });
});

router.get("/favorite", (req, res) =>{


    res.json({
        person: {
            name: req.params.name,
            favorite1: 'bitcoin',
            favorite2: 'cardamo',
            favorite3: 'ethereum'
        }
    });
});

module.exports = router;