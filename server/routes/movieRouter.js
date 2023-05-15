let express = require('express'); // boilerplate
let router = express.Router(); // boilerplate

let movieList = [];

// app becomes "router"
// remove book from url

router.get('/', (req, res) => {
    res.send(movieList);
  });
  
router.post('/', (req, res) => {
    movieList.push(req.body);
    res.sendStatus(200);
  });

module.exports = router;
