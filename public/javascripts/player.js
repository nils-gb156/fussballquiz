'use strict'

loadPlayers()

/**
 * Läd alle Spieler und stellt den Namen in der Liste dar.
 */
async function loadPlayers() {
    try {
        const response = await fetch('/api/get-players')
        const players = await response.json();

        const list = document.getElementById('player-list')
        list.innerHTML = ''

        players.forEach(player => {
            const li = document.createElement('li')
            li.textContent = player.name;
            list.appendChild(li)
        })
    } catch (error) {
        console.error('Fehler beim Laden der Spieler:', error)
    }
    
}

/**
 * Spieler hinzufügen.
 */
async function addPlayer() { 
    const name = document.getElementById('player-name').value;

    if (!name || name.trim() === '') {
        alert('Bitte Namen eingeben.');
        return;
    }

    try {
        const response = await fetch('/api/add-player', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('player-name').value = '';
            loadPlayers();
        } else {
            alert(`Fehler: ${result.error}`);
        }
    } catch (error) {
        console.error('Fehler: ', error);
        alert('Verbindung zum Server fehlgeschlagen.');
    }
}