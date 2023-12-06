var express = require('express');
var router = express.Router();

const { roomLocations, beachLocations, dragonLocations } = require('./locations');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/click', function (req, res, next) {
  console.log('POST received.');
  console.log(req.body);
  const { game, cx, cy, index } = req.body;

  let x, y;

  switch (game) {
    case '1':
      ({ x, y } = roomLocations[index]);
      break;
    case '2':
      ({ x, y } = beachLocations[index]);
      break;
    case '3':
      ({ x, y } = dragonLocations[index]);
      break;

    default:
      break;
  }

  if (Math.abs(x - cx) < 50 && Math.abs(y - cy) < 50) {
    console.log('you found it!');
    res.status(200).json(true);
  } else {
    res.status(200).json(false);
    console.log('Try again');
  }
});

module.exports = router;
