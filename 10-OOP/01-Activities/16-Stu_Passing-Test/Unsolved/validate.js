class Validate {}

Validate.prototype.isPassword = (password) => {
 // TODO: Write code that checks if the password is less than 8 characters and returns false if so.
  if (password.lenth < 8) {
    return false;
  }
  // TODO: Write code the checks if the password contains at least 1 uppercase, lowercase, and number. It should return true if it does, and false if not.

  if (password !== password.toUpperCase()) {
    return false;
  }
  if (password !== password.toLowerCase()) {
    return false;
  }
};

module.exports = Validate;
