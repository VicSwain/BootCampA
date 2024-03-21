const express = require('express');
const path = require('path');
const termData = require('./db/terms.json');
const PORT = 3001;
const app = express();
const { Pool } = require('pg');
const { log } = require('console');

const pool = new Pool(
    {
        user: 'postgres',
        password: '3082',
        host: 'localhost',
        database: 'movie_db'
    },
    console.log('Connected to movie_db!')
);

pool.connect();


app.get('./api/movies', (req, res) => {
    pool.query('SELECT * FROM movies', function (err, {rows}) {
     if (err) {
        console.log(err);
     }
        console.log(rows);
    })});


app.get('./api/move-reviews', (req, res) => {
    pool.query('SELECT * FROM reviews', function (err, {rows}) {
        if (err) {
            console.log(err);
        }
        console.log(rows);
    });
});

app.post('/api/add-movie', (req, res) => {
    pool.query('SELECT movies.movie_name AS movie, reviews.review FROM reviews LEFT JOIN movies ON reviews.movie_id = movies.id ORDER BY movies.movie_name', function(err, {rows}) {
        if (err) {
            console.log(err);
        }
        console.log(rows);
    });
});

app.delete('/a')

app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}`)
);


















// app.get('/api/movies', (req, res) => 
//     pool.query('SELECT * FROM movies', 
//     function (err, {rows})) {
//         console.log(rows);
// });






// app.get('/api/movies', (req, res) => 
// pool.query('SELECT * FROM movies', function (err, {rows}) {
//     console.log(rows);
//   })
// );