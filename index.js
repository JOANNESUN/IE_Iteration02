const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session'); 
const multer = require('multer'); // file saving library 
const path = require('path');

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

app.post('/home', function(req, res){ res.render('index');});

app.get('/emoji', function(req, res){ res.render('emoji');});

app.get('/game', function(req, res){ res.render('game');});

app.get('/card_alter', function(req, res){ res.render('card_alter',  {ImageName: fileOne});});

app.use(session({
    secret: 'Joanne',// this is intializing session 
    resave : false,
    saveUninitialized: false
  }))//cookie for session

// connecting to postgres
const connection = require ("./database");

// export schema here 
const User = require("./models/User");

const Game = require("./models/Game");

// connecting with database and create table in database
connection.sync(); 

// all post route below:
// user info
app.post('/info', (req, res) => {
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

app.post('/answer', (req, res)=>{
   console.log('information successsful');
   console.log(req.body.gamescore); // get information from brower 
   let date = Date.now();
   Game.create ({ // the line here will create new rows in database
        
    gamescore:req.body.gamescore, // not sure which one 
    datetime:date,
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

// passing pictures to server 
// https://www.jsmount.com/upload-image-in-node-js-with-multer/ 

var fileOne = "wife.png"
const my_storage = multer.diskStorage({ 
     destination: (req, file, callback) => {
         callback(null, './views/'); // where picture will be stored
     },
     filename: (req, file, callback) => {
         const fileNameTemp = Date.now() + '_' + file.originalname;
         fileOne = fileNameTemp;
         callback(null, fileNameTemp);
     }
 });

function checkfileFilter(file, cb) {
const allowedFileTypes = /jpeg|pjpeg|png|jpg/;
// check file type 
// path.extname(file.originalname) - it will return the extention of my uploaded file, i.e. png or jpg
const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());

const mime = allowedFileTypes.test(file.mimetype);
//extname===true && mime===true 
    if (extname && mime) {

       cb(null,true)
    } else {
       cb("file must be in jpeg or pjpeg or png or jpg file")
    }
}

 const upload = multer({
 
// key: value 
 storage: my_storage,
 limits: { fileSize: 3 * 1024 * 1024}, 
// 1kb = 1024 bytes
// 1mb = 1024 * 1024
 fileFilter: function (req, file, cb) {
    checkfileFilter(file, cb)
 } 
 
 }).single('picture01'); // upload.single('file') at once
 
//
 app.post('/pictureUpload', (req, res) => {
 
    console.log("started");

    upload(req, res, function (error) { // looking for multer object above
        if (error) { //instanceof multer.MulterError
            res.status(500);
            console.log("error occurs");
            console.log(error);
            
        } else {
            console.log("file is uploaded");
            console.log(`showing the file ${fileOne}`);
            
            res.render("card_alter", 
            {ImageName: fileOne}
            );

        }
    })
}
 );
// Gig routes
// app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 3012 

app.listen(PORT,console.log ("server started on port ${PORT}"));