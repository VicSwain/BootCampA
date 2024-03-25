const router = require('express').Router();
const User = require('../../models/User');

// TODO: Implement each of the three routes below using `async/await`
// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes
// User.findByPk find a record based on a primary key (req.params.id)
// GET a user
router.get('/:id', async (req, res) => { // this is the correct 
    try {
        const userData = await User.findByPk(req.params.id);
        if (!userData) {
            res.status(404).json({message: 'No user wit this id!'});
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error!'});
    }
});

// UPDATE a user
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.update(req.body, {
            where: {
                id: req.params.id,   
            };
        });
        if (!updatedUser[0]) {
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({message: 'Internal server error'});
    }
};
})
// DELETE a user
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = User.destroy(req.body);
        res.status(200).json(deletedUser)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
