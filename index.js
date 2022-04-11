const satelize = require('satelize-lts');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/location/:ip', (req, res) => {
    satelize.satelize({ip:req.params.ip}, function(_, payload) {
        if(payload == null) res.send("Unknown");
        else res.send(payload.country.en);
       });
});

app.listen(process.env.PORT, () => console.log('Um, running?!'));

