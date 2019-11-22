const express = require('express');
const app = express();
const compression = require('compression');
const { init, newUser } = require ('./database/db');
const { hash, compare } = require('./auth');
const csurf = require('csurf');
const s3 = require('./s3');
const { s3Url } = require('./config');
const { uploader } = require('./upload');
const { validation } = require('./validate');
const cookieSession = require('cookie-session');
const cookieSessionMiddleware = cookieSession({
    secret: `I'm always angry.`,
    maxAge: 1000 * 60 * 60 * 24 * 90
});

app.use(express.urlencoded({extended: false}));
app.use(express.static('./public'));
app.use(express.json());
app.use(compression());
app.use(cookieSessionMiddleware);
app.use(csurf());
app.use(function(req, res, next){
    res.cookie('mytoken', req.csrfToken());
    next();
});

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

app.get('/welcome', (req, res) => {
    if (req.session.userId) {
        res.redirect('/');
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});

app.post('/register', (req, res) => {
    let { first, last, email, password } = req.body;
    if(
        validation(first, last)
    ){
        hash(password).then((passHash) => {
            newUser(first, last, email, passHash).then(({ rows }) => {
                req.session.userId = rows[0].id;
                console.log("hello world: ", req.session.userId);
                res.redirect('/');
            }).catch(() => res.redirect(500, '/welcome'));
        }).catch(() => res.redirect(500, '/welcome'));
    } else {
        res.redirect(500, '/welcome');
    }
});

app.get('/init', (req, res) => {
    let numGen = [];
    do {
        let x = Math.floor(Math.random() * 78);
        if(numGen.indexOf(x) === -1) numGen.push(x);
    } while (numGen.length < 31);
    console.log("numgen: ", numGen);
    console.log("numgen length: ", numGen.length);
    
    init(numGen).then(({ rows }) => {
        console.log("returned back from the database: ", rows.length);
        res.json(rows);
    }).catch(err => console.log(err));
});

app.get('*', function(req, res) {
    if(!req.session.userId) {
        res.redirect('/welcome');
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});

app.listen(8080, () => console.log("I'm listening."));