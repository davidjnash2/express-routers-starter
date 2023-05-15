let express = require('express'); // boilerplate
let router = express.Router(); // boilerplate

let bookList = [];

// app becomes "router"
// remove book from url
router.get('/', (req, res) => {
    res.send(bookList);
});

router.post('/', (req, res) => {
    bookList.push(req.body);
    res.sendStatus(200);
});

module.exports = router;
