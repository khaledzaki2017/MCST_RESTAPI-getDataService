const express = require("express");
const app = express();
const mongoose = require('mongoose');
import Test from "./models/test"
import job from "./getDataService"
require('dotenv').config();

mongoose.connect("mongodb://localhost:27017/mydb")

job.start()

app.get('/test', function (req, res) {
    const qs = req.query.title
    const data = qs ? Test.find({ title: {} }) : {}
    Test.find(data, function (err, List) {
        if (err) {
            console.log(err)
        } else {
            res.json(List)
        }
    })
})


app.get('*', function (req, res) {
    res.send('Route does not exist');
})

app.listen(process.env.PORT || 3000, function () {
    console.log('api server has started');
});