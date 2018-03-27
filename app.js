var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config/database');
var bodyParser = require('body-parser');
//var session = require('express-session');
//var expressValidator = require('express-validator');
//var expressMessages = require('express-messages');



// Connect to DB
mongoose.connect(config.database);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongo Database connected Boss');
});





//init app
var app = express();





//View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');






//Public Folder
app.use(express.static(path.join(__dirname, 'public')));




//Express-messages middleware
//app.use(require('connect-flash')());
//app.use(function (req, res, next) {
//  res.locals.messages = require('express-messages')(req, res);
//  next();
//});





//Body-parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())






//Express-validator middleware
// Express Validator middleware
//app.use(expressValidator({
//    errorFormatter: function (param, msg, value) {
//        var namespace = param.split('.')
//                , root = namespace.shift()
//                , formParam = root;
//
//        while (namespace.length) {
//            formParam += '[' + namespace.shift() + ']';
//        }
//        return {
//            param: formParam,
//            msg: msg,
//            value: value
//        };
//    },
//    
//}));
//
//
//
//
//
//
////Express-session middleware
//var app = express()
//app.set('trust proxy', 1) // trust first proxy
//app.use(session({
//  secret: 'keyboard cat',
//  resave: false,
//  saveUninitialized: true,
//  cookie: { secure: true }
//}));





//Set Routes
var pages = require('./routes/pages.js');
var adminPages = require('./routes/admin_pages.js');

app.use('/admin/pages', adminPages);
app.use('/', pages);


//start the server
var port = 3000;
app.listen(port, function() {
	console.log('Server started on port ' + port);
});