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
    next();
});

//Get movies
router.route('/movies').get(async (request, response) => {
  try {
    let pool = await sql.connect(config);
    let data = await pool.request().execute('GetMovies');
    response.status(200).json(data.recordset);
  } catch (error) {
    fs.appendFile('./log.txt', `[${Date.now()}]: ${error.originalError.message}`, (err) => {if (err) {console.log(err)}});
    response.status(500).json({message: "Could not get movies list from database. Connect your server administrator"});
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
  try {
    let pool = await sql.connect(config);
    let data = await pool.request().input('movieID', request.params['id']).execute('GetMovieScreening');
    response.status(200).json(data.recordset);
  } catch (error) {
    fs.appendFile('./log.txt', `[${Date.now()}]: ${error.originalError.message}`, (err) => {if (err) {console.log(err)}});
    response.status(500).json({message: "Could not get screening list from database. Connect your server administrator"});
    
  }
})

router.route('/test/:id').get(async (request, response) => {
  let pool = await sql.connect(config);
  let data = await pool.request().input('MovieID', request.params['id']).execute('test');
  response.json(data.recordsets);
  console.log(data);
})

//

router.route('/screenings').post(async (request, response) => {
  let body = request.body;
  console.log(body)
  let pool = await sql.connect(config);
  let data = await pool.request().input('UserID', body.UserID).input('Paid', body.Paid).input('Active', body.Active).execute('CreateReservation');
  response.json({status: "OK"});
})

router.route('/movies/:id').delete(async (request, response) => {
  let pool = await sql.connect(config);
  let data = await pool.request().input('MovieID', request.params['id']).execute('DeleteMovie');
  response.json({status: "OK"});
})


var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);