const express = require('express');
const router = express.Router();
const { db } = require('../db');

// Spielerliste abrufen
router.get('/api/get-players', async (req, res) => {
    try {
        const players = await db.query('SELECT * FROM players ORDER BY id ASC');
        res.json(players);
    } catch (error) {
        console.error('Fehler beim Laden der Spieler:', error);
        res.status(500).json({error: 'Datenbankfehler'});
    }
});

module.exports = router;