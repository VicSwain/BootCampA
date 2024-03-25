const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// TODO: Add comments describing the functionality of this `login` route


router.post('/login', async (req, res) => {
  try { //search the DB for a uswer with provided email
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) { // if to ensure the email entered exists
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }
    //comparing the entered user password with the sotred password for the user
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    if (!validPassword) { //if to kick out if the passwords do not match
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    } //if the password matchs then response to let user know they are logged in
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    //500 is internal server error
    res.status(500).json(err);
  }
});

module.exports = router;
