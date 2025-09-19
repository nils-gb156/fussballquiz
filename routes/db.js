const { Pool } = require('pg');

// Datenbankverbindung mit Umgebungsvariablen aus .env Datei
const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
});

// Einfache Wrapper-Funktionen für Datenbankoperationen
const db = {
    async query(text, params) {
        const client = await pool.connect();
        try {
            const result = await client.query(text, params);
            return result.rows;
        } finally {
            client.release();
        }
    }
};

module.exports = { db };