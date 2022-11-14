require('dotenv').config()
const express = require('express');
const router = express.Router();
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const expressEjsLayout = require('express-ejs-layouts');
const fs = require('fs');
const vhost = require('vhost');
//Mongoose
require("./config/passport")(passport)
mongoose.connect(process.env.MONGO_CLIENT,{useNewUrlParser: true, useUnifiedTopology : true})
    .then(() => console.log('mongoose_connected'))
    .catch((err)=> console.log(err));


//EJS
app.set('view engine','ejs');
app.use(expressEjsLayout);
app.set('layout', 'layouts/appPageLayout');

//BodyParser
app.use(express.urlencoded({extended : false}));

//Session Handler
app.use(session({
    secret : 'Tokeniz2.0SecretString',
    resave : true,
    saveUninitialized : true
   }));
app.use(passport.initialize());
app.use(passport.session());

//use flash
app.use(flash());
app.use((req,res,next)=> {
     res.locals.success_msg = req.flash('success_msg');
     res.locals.error_msg = req.flash('error_msg');
     res.locals.error  = req.flash('error');
   next();
   })

//Routes

//app.use(vhost('user.localhost',require('./routes/user')));
app.use(vhost('*.localhost',require('./routes/index')));
//app.use('/user',require('./routes/user'));
app.use(express.static(__dirname +'/public'))
app.listen(process.env.PORT)