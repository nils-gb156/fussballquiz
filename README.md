# Fußballquiz
Webseite für den Punktestand eines Fußballquiz

## Setup

### Voraussetzungen
- Docker und Docker Compose
- Node.js (für lokale Entwicklung)

### Installation

1. Repository klonen:
```bash
git clone https://github.com/nils-gb156/fussballquiz.git
cd fussballquiz
```

2. Umgebungsvariablen konfigurieren:
```bash
cp .env
```

3. Bearbeiten Sie die `.env` Datei und setzen Sie sichere Passwörter:
```
POSTGRES_PASSWORD=ihr_sicheres_passwort
PGADMIN_DEFAULT_EMAIL=ihre_email@example.com
PGADMIN_DEFAULT_PASSWORD=ihr_pgadmin_passwort
```

4. Docker Container starten:
```bash
docker-compose up -d
```

### Zugriff

- **Anwendung**: http://localhost:4000
- **PgAdmin**: http://localhost:8085

### Entwicklung

Für die Entwicklung können Sie die Container im Development-Modus starten:
```bash
docker-compose up
```

Die Anwendung wird automatisch neu geladen, wenn Sie Dateien ändern.

### Datenbank

Das Projekt verwendet PostgreSQL als Datenbank. Die Datenbankverbindung wird über Umgebungsvariablen konfiguriert.

## Technologien

- Node.js
- Express.js
- PostgreSQL
- Docker
- PgAdmin
