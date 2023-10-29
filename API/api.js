var config = require('./dbconfig');
const sql = require('mssql');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();
const fs = require('fs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({origin: '*'}));
app.use('/api', router);

router.use((request, response, next) => {
    console.log('middleware');
    next();
});

//Get movies
router.route('/movies').get(async (request, response) => {
  try {
    let pool = await sql.connect(config);
    let data = await pool.request().execute('GetMovies');
    response.status(200);
    response.json(data.recordset);
  } catch (error) {
    response.status(500).json(error);
    fs.appendFile('log.txt', error.message);
  }
})

//Get movie by ID
router.route('/movies/:id').get(async (request, response) => {
  let pool = await sql.connect(config);
  let data = await pool.request().input('id', request.params['id']).execute('GetMoviesByID');
  response.json(data.recordset);
})

//Get movie screening
router.route('/screening/:id').get(async (request, response) => {
  let pool = await sql.connect(config);
  let data = await pool.request().input('movieID', request.params['id']).execute('GetMovieScreening');
  response.json(data.recordset);
})

router.route('/test/:id').get(async (request, response) => {
  let pool = await sql.connect(config);
  let data = await pool.request().input('MovieID', request.params['id']).execute('test');
  response.json(data.recordsets);
  console.log(data);
})


var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);