// if we did not do this we would have to pass our app(); around
const router = require('express').Router();

// Import our files containing our routes
const feedbackRouter = require('./feedback');
const tipsRouter = require('./tips');
//  router.use in place of app.use since we are using router
router.use('/feedback', feedbackRouter); // api/feedback
router.use('/tips', tipsRouter); //api/tips

module.exports = router;
