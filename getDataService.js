import axios from "axios"
import cheerio from "cheerio"
const mongoose = require('mongoose')
const CronJob = require('cron').CronJob;
// import Test from "./models/test"
require('dotenv').config();

const url = " http://test.com/admin/data";

const job = new CronJob('59 23 * * *', function () {
    axios.get(url)
        .then(response => {
            const html = response.data;
            const $ = cheerio.load(html);

            //whatever the logic here


            console.log('Successful scrape!')
        })
        .catch(console.error);
}, null, true, '')

module.exports = job;