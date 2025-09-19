var express = require('express');
var path = require('path');
var router = express.Router();

// Standardseite
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Spielerseite
router.get('/player', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/player.html'));
});

module.exports = router;
