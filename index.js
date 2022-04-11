const satelize = require('satelize-lts');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/location/:ip', (req, res) => {
    satelize.satelize({ip:req.params.ip}, function(err, payload) {
        console.log(payload);
        if(err != null) res.send("");
        res.send(payload.country.en);
       });
});

app.listen(process.env.PORT, () => console.log('Um, running?!'));

