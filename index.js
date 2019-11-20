const express = require('express');
const app = express();
const compression = require('compression');
const { init } = require ('./database/db');

app.use(express.urlencoded({extended: false}));
app.use(express.static('./public'));
app.use(express.json());
app.use(compression());

if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.get('/init', (req, res) => {
    let numGen = [];
    do {
        let x = Math.floor(Math.random() * 78);
        if(numGen.indexOf(x) === -1) numGen.push(x);
    } while (numGen.length < 31);
    init(numGen).then(({ rows }) => {
        res.json(rows);
    }).catch(err => console.log(err));
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080, () => console.log("I'm listening."));