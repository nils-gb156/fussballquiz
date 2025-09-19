'use strict'

/**
 * Läd alle Spieler und stellt den Namen in der Liste dar.
 */
async function loadPlayers() {
    try {
        const response = await fetch('/api/get-players')
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const players = await response.json();

        // Überprüfe ob es ein Fehler-Objekt ist
        if (players.error) {
            console.error('Server-Fehler:', players.error);
            return;
        }

        console.log(players)

        const list = document.getElementById('player-list')
        list.innerHTML = ''

        // Überprüfe ob players ein Array ist
        if (Array.isArray(players)) {
            players.forEach(player => {
                const li = document.createElement('li')
                li.textContent = player.name;
                list.appendChild(li)
            })
        } else {
            console.error('Antwort ist kein Array:', players);
        }
    } catch (error) {
        console.error('Fehler beim Laden der Spieler:', error)
    }
    
}

loadPlayers()