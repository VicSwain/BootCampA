const router = require('express').Router();
const bcrypt = require('bcrypt'); //this is the require to hash the encrypt passwords
const User = require('../../models/User');

// CREATE a new user
router.post('/', async (req, res) => {
  try {
    const newUser = req.body;
    // hash the password from 'req.body' and save to newUser
    newUser.password = await bcrypt.hash(req.body.password, 10); //salting rounds which is the number of time we mix the pw with random characters
    // create the newUser with the hashed password and save to DB
    const userData = await User.create(newUser); //User.create is a sequlaize method
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
