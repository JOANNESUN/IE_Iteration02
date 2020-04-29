const express = require('express');
const bodyParser = require('body-parser');

// bring connection from database.js
const db = require('./database');

// test db
db.authenticate()
    .then(() => console.log('Database Connected.'))
    .catch(err => console.log ('error'))


const app = express();

// interpreting browser languge to server language 
app.use(bodyParser.urlencoded()); 
app.use(bodyParser.json()); 

app.set('view engine', 'ejs'); 

app.use(express.static(__dirname+'/views')); 

// set static folder
// app.use(express.static(path.join(__dirname,'public')));

// app.get('/', (req, res) => res.send('Hello World!'));

app.get('/', function(req, res){ res.render('login');});

app.get('/frontpage', function(req, res){ res.render('frontpage');});

app.get('/registration', function(req, res){ res.render('registration');});

app.get('/fixedToDo', function(req, res){ res.render('fixedToDo');});

app.get('/home', function(req, res){ res.render('index');});

app.get('/emoji', function(req, res){ res.render('emoji');});

app.get('/game', function(req, res){ res.render('game');});

app.get('/dailyreminder', function(req, res){ res.render('dailyReminder');});

app.post('/answer', function(req, res){
   console.log(req.body.value1); // get information from brower 
   
    res.render('index');
});

// Gig routes
// app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 3012 

app.listen(PORT,console.log ("server started on port ${PORT}"));