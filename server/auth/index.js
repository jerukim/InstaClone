const router = require('express').Router();
const { User } = require('../db/models/');
module.exports = router;

router.post('/login', async (req, res, next) => {
  try {
    console.log('got here');
    const { login, password } = req.body;

    console.log('login', login);
    console.log('password', password);

    const loginType = login.includes('@') ? 'email' : 'username';

    const user = await User.findOne({
      where: { [loginType]: login },
    });

    console.log('USER', user);

    if (!user) {
      console.log('No such user found:', login);
      res
        .status(401)
        .send(
          `The username you entered doesn't appear to belong to an account. Please check your username and try again.`
        );
    } else if (!user.correctPassword(password)) {
      console.log('Incorrect password for user:', login);
      res.status(401).send('Incorrect password');
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)));
    }
  } catch (err) {
    next(err);
  }
});
