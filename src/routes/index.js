const router = require('express').Router();

const { authProtect } = require('../middleware/authProtect');

router.get('/', authProtect, (req, res) => {
    
});

module.exports = router;