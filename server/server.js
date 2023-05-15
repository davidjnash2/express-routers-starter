const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 5000;
// const bookList = [];
// const movieList = [];

// line one of two for books
const bookRouter = require('./routes/bookRouter');

// line one of two for movies
const movieRouter = require('./routes/movieRouter');

// express static file serving - public is the folder name
app.use( express.static('server/public') );

// Setup body parser for POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Start server listening on PORT
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
})

// TODO - Move these routes to their own modules!
//line two of two for books
app.use('/book', bookRouter);

//line two of two for movies
app.use('/movie', movieRouter);

// app.get('/book', (req, res) => {
//     res.send(bookList);
// });

// app.post('/book', (req, res) => {
//     bookList.push(req.body);
//     res.sendStatus(200);
// });

// app.get('/movie', (req, res) => {
//   res.send(movieList);
// });

// app.post('/movie', (req, res) => {
//   movieList.push(req.body);
//   res.sendStatus(200);
// });
