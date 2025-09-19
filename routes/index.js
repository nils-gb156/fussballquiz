var express = require('express');
var router = express.Router();

// Standardseite
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
