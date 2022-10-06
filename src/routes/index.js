const router = require('express').Router();

const { authProtectExpress } = require('../middleware/authProtect');

router.get('/', authProtectExpress, (req, res) => {});

module.exports = router;