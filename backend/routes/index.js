var express = require('express');
var router = express.Router();
// Model
const Score = require('../models/score');

const {
  roomLocations,
  beachLocations,
  dragonLocations,
} = require('./locations');

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
    case 1:
      ({ x, y } = roomLocations[index]);
      break;
    case 2:
      ({ x, y } = beachLocations[index]);
      break;
    case 3:
      ({ x, y } = dragonLocations[index]);
      break;

    default:
      break;
  }

  console.log(`x: ${x}, y: ${y}`);
  if (Math.abs(x - cx) < 50 && Math.abs(y - cy) < 50) {
    console.log('you found it!');
    res.status(200).json(true);
  } else {
    res.status(200).json(false);
    console.log('Try again');
  }
});

router.post('/submit', async function (req, res, next) {
  console.log('POST received.');
  console.log(req.body);

  const score = new Score({
    game: req.body.game,
    name: req.body.name,
    time: req.body.time,
    date: req.body.date,
  });
  await score.save();
  res.status(201).json({ message: 'Success' });
});

router.get('/scores', async function (req, res, next) {
  const scores_list = await Score.find(
    {game: req.query.game},
  )
    .sort({ time: 1 })
    .maxTimeMS(5000) // Set the maximum time for query execution
    .exec();

  res.status(200).json({ scores_list });
});

module.exports = router;
