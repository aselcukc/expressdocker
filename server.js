const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('port', 8080);

app.use(express.static('public'));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(
  session({
    secret: 'mumtaz the cat',
    resave: false,
    saveUninitialized: false
  })
);

app.get('/', (req, res) => res.send('UZAY'));

http.listen(app.get('port'), () =>
  console.log('Server started at: ', app.get('port'))
);
