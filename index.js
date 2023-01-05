const satelize = require('satelize-lts');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'public') });
});

app.get('/location/:ip', (req, res) => {
    satelize.satelize({ ip: req.params.ip }, function (_, payload) {
        if (payload == null) res.send("Unknown");
        else res.send(payload.country.en);
    });
});

app.listen(process.env.PORT || 3000);

