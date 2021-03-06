var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var http = require('http');

//var index = require('./routes/index');
var users = require('./routes/users');
//var test = require('./routes/test');
var movies = require('./routes/movies');
var dinaduola = require('./routes/dinaduola');
var app = express();

//db
var mongoose = require('mongoose');
// connect to mongodb
var dbName = 'dinaduola';
var url = 'mongodb://dinaduola:dinaduola@localhost:27017/' + dbName;
var mongoOptions = {
    server: {
        socketOptions: {
            keepAlive: 1
        }
    }
};
mongoose.connect(url, mongoOptions);
mongoose.connection.on('error', function (err) {
    console.log('Mongo Error:' + err);
}).on('open', function () {
    console.log('Connection opened');
});

//json
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// view engine setup
app.set('views', path.join(__dirname, 'public'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', index);
app.use('/users', users);
//app.get('/test', test.list);
app.get('/api/movie/all', movies.list);
app.post('/api/movie/create', movies.create);
app.put('/api/movie/:id', movies.update);
app.get('/api/dinaduola/all', dinaduola.list);
app.put('/api/dinaduola/create', dinaduola.create);
app.delete('/api/dinaduola/delete/:id', dinaduola.delete);

app.all('/*', function (req, res) {
    res.sendfile('index.html', {root: path.join(__dirname, 'public')});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
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

http.createServer(app).listen('8088',function(){
  console.log('Express server listening on port '+'8088');
});

module.exports = app;
