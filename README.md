# Fußballquiz
Webseite für den Punktestand eines Fußballquiz

## Setup

### Voraussetzungen
- Docker installiert
- PostGRE SQL Version 15 installiert
- pgAdmin installiert

### Installation

1. Repository klonen:

2. Datenbank anlegen
   - pgAdmin4 öffnen
   - Verbindung zu Ihrer lokalen PostgreSQL-Installation herstellen
   - Neue Datenbank "fussballquiz" anlegen
   - SQL-Script aus `postgres-init/init.sql` in der neuen Datenbank ausführen

3. Datenbankverbindung konfigurieren
   Neue Datei `.env` im Projektverzeichnis anlegen mit folgendem Inhalt:
   (Benutzername und Passwort an Ihre lokale PostgreSQL-Installation anpassen!)

```
# Database Configuration
POSTGRES_HOST=host.docker.internal
POSTGRES_PORT=5432
POSTGRES_DB=fussballquiz
POSTGRES_USER=postgres
POSTGRES_PASSWORD=lokales_passwort
```

4. Docker Container starten:
```bash
docker-compose up -d
```

**Hinweis**: Das Projekt verwendet nur Docker für die Node.js-App. PostgreSQL und pgAdmin laufen lokal auf Ihrem System.

### Zugriff

- **Anwendung**: http://localhost:4000

### Datenbank

Das Projekt verwendet PostgreSQL als Datenbank. Die Datenbankverbindung wird über Umgebungsvariablen konfiguriert.

## Technologien

- Node.js
- Express.js
- PostgreSQL
- Docker
- PgAdmin
