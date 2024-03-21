const router = require('express').Router();
const tipText = document.getElementById('tipText');
const tipUserName = document.getElementById('tipUsername');
const tipForm = document.getElementById('tip-form');
// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');
// TODO: import your diagnostics route
const diagnosticsRouter = require('./diagnostics');
const diagnostics = require('./diagnostics');
router.use('/tips', tipsRouter);
router.use('/feedback', feedbackRouter);
// TODO: Initialize diagnostics route
router.use('diagnostics', diagnosticsRouter);
module.exports = router;

const tipPost = (tipper) => 
    fectch('api/diagnostics', {
        method: 'POST',
        headers: {
            'Content-Type': 'diagnostics/json',
        },
        body: JSON.stringify(tipper),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log('Success POST request:', data);
        return data;
    })
    .catch((error) => {
        console.error('Error in POST request:', error);
    });

    tipForm.addEventListener('submit', (e) => {
        e.preventDefault();
    })        
    }

