const express = require('express');
const bodyParser = require('body-parser');

// bring connection from database.js

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

// connecting to postgres
const connection = require ("./database");

// test connection
// connection.authenticate()
//     .then(() => console.log('Database Connected.'))
//     .catch(err => console.log ('error'))


// export schema here 
const User = require("./models/User");

// connecting with database and create table in database
connection.sync(); 

// all post route below:
app.post('/info', async (req, res) => {
    console.log('information successsful');
    console.log(req.body.username);
    console.log(req.body.age);
    console.log(req.body.height);
    console.log(req.body.gender);

    User.create ({ // the line here will create new rows in database
        username:req.body.username,
        age:req.body.age,
        height:req.body.height,
        gender:req.body.gender,
    })
    .then(
        ()=>{
        console.log("created successfully")
        res.render("success");
        }
    )
    .catch(
        (err)=>{
            console.log(err) 
            res.render("registration"); // if failed then go back to registration page

        }
    );


});

app.post('/answer', function(req, res){
   console.log(req.body.value1); // get information from brower 
   
    res.render('index');
});

// Gig routes
// app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 3012 

app.listen(PORT,console.log ("server started on port ${PORT}"));