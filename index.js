const express = require('express');
const bodyParser = require('body-parser');

// bring connection from database.js

const app = express();

// interpreting browser languge to server language 
app.use(bodyParser.urlencoded()); 
app.use(bodyParser.json()); 

app.set('view engine', 'ejs'); 

app.use(express.static(__dirname+'/views')); 

app.get('/', function(req, res){ res.render('login');});

app.get('/frontpage', function(req, res){ res.render('frontpage');});

app.get('/real-login', function(req, res){ res.render('real-login');});

app.get('/registration', function(req, res){ res.render('registration');});

app.get('/fixedToDo', function(req, res){ res.render('fixedToDo');});

app.get('/home', function(req, res){ res.render('index');});

app.get('/emoji', function(req, res){ res.render('emoji');});

app.get('/game', function(req, res){ res.render('game');});

app.get('/dailyreminder', function(req, res){ res.render('dailyReminder');});

// connecting to postgres
const connection = require ("./database");

// export schema here 
const User = require("./models/User");

const Game = require("./models/Game");

// connecting with database and create table in database
connection.sync(); 

// all post route below:
// user info
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

// passing game score

app.post('/answer', async (req, res)=>{
   console.log('information successsful');
   console.log(req.body.gamescore); // get information from brower 

   Game.create ({ // the line here will create new rows in database
        
    gamescore:req.body.gamescore, // not sure which one 
    
})
.then(
    ()=>{
    console.log("created successfully")
    res.render("index");
    }
)
.catch(
    (err)=>{
        console.log(err) 
        res.render("game"); // if failed then go back to registration page

    }
);
});

// Gig routes
// app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 3012 

app.listen(PORT,console.log ("server started on port ${PORT}"));