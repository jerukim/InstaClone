const router = require('express').Router();
const { User } = require('../db/models/');
module.exports = router;

router.post('/login', async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});
