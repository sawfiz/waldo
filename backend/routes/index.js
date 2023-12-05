var express = require('express');
var router = express.Router();

const location1 = { x: 1000, y: 160 };
const location2 = { x: 725, y: 155 };
const location3 = { x: 310, y: 240 };
const location4 = { x: 600, y: 360 };
const location5 = { x: 1100, y: 500 };
const location6 = { x: 550, y: 420 };
const location7 = { x: 720, y: 370 };

const locations = [
  location1,
  location2,
  location3,
  location4,
  location5,
  location6,
  location7,
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/click', function (req, res, next) {
  console.log('POST received.');
  console.log(req.body);
  const {mx, my, index} = req.body;
  const { x, y } = locations[index];
  console.log("🚀 ~ file: index.js:31 ~ locations[index]:", x, y)
  if (Math.abs(x - mx) < 20 && Math.abs(y - my) < 20) {
    console.log('you found it!');
    res.status(200).json(true)
  } else {
    res.status(200).json(false)
    console.log('Try again');
  }
});

module.exports = router;
