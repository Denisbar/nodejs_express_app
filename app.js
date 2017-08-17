var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var expressSession = require('express-session');

var index = require('./routes/index');
var foo = require('./routes/foo');
var listPage = require('./routes/list-page')
var questionId = require('./routes/questionId');
var isAnsweredId = require('./routes/isAnsweredId');
var addAnswerId = require('./routes/addAnswerId');
var askQuestionGet = require('./routes/askQuestionGet');
var askQuestionPost = require('./routes/askQuestionPost');
var answered = require('./routes/answered');
var notAnswered = require('./routes/notAnswered');

var app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({secret: 'mysecret', saveUninitialized: false, resave: false}));

app.use('/', index);
app.use('/', foo);
app.use('/',listPage);
app.use('/', questionId);
app.use('/', isAnsweredId);
app.use('/', addAnswerId);
app.use('/', askQuestionGet);
app.use('/', askQuestionPost);
app.use('/', answered);
app.use('/', notAnswered);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Error');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
