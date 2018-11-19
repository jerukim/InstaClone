const router = require('express').Router();
const db = require('../db');
const { User } = require('../db/models');

module.exports = router;

router.get('/:userId', async (req, res, next) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  res.json(user);
});
