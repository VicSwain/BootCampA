// TODO: Import express and call the Router method
const router = require('express').Router();
// TODO: Import modules for tips/feedback
const feedbackRouter = require('./feedback');
const tipRouter = require('./tips');
// TODO: Use our routes
router.use('/feedback', feedbackRouter);
router.use('/tips', tipRouter);

// TODO: Export app
module.exports = router; 
