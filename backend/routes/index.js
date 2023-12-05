var express = require('express');
var router = express.Router();

const location1 = { x: 3850, y: 950 };
const location2 = { x: 2760, y: 960 };
const location3 = { x: 1160, y: 1250 };
const location4 = { x: 2295, y: 1750 };
const location5 = { x: 4175, y: 2290 };
const location6 = { x: 2100, y: 1855 };
const location7 = { x: 2740, y: 1780 };

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
  const {cx, cy, index} = req.body;
  const { x, y } = locations[index];
  console.log("🚀 ~ file: index.js:31 ~ locations[index]:", x, y)
  if (Math.abs(x - cx) < 50 && Math.abs(y - cy) < 50) {
    console.log('you found it!');
    res.status(200).json(true)
  } else {
    res.status(200).json(false)
    console.log('Try again');
  }
});

module.exports = router;
