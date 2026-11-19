# TrailPlanner API — Sprint 1

Backend foundation for a hiking trip planning application.

## Sprint 1 scope
- Node.js + Express HTTP server
- PostgreSQL connection via Sequelize ORM
- Initial `Trip` model
- Basic trip CRUD endpoints
- Health endpoint and basic error responses

User registration, authentication, joining trips, participant management, and frontend are intentionally planned for later sprints.

## Requirements
- Node.js 18+ (LTS recommended)
- PostgreSQL 14+

## Setup
1. Clone or download this repository.
2. Install dependencies: `npm install`
3. Create a PostgreSQL database named `trailplanner` (or set another name in `.env`).
4. Copy `.env.example` to `.env` and enter your local database credentials.
5. Start in development mode: `npm run dev` or run `npm start`.
The server checks the DB connection and creates the model table via Sequelize sync on startup.

## Configuration
`.env` variables: `PORT`, `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`. Never commit the real `.env` file.

## API
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Check server status |
| GET | `/api/trips` | List trips |
| GET | `/api/trips/:id` | Get trip by ID |
| POST | `/api/trips` | Create trip |
| PUT | `/api/trips/:id` | Update trip |
| DELETE | `/api/trips/:id` | Delete trip |
See `docs/api-examples.http` for sample requests.

### Create-trip JSON example
```json
{
  "title": "Weekend hike",
  "description": "A beginner-friendly hiking trip",
  "region": "Lake District",
  "startDate": "2027-05-10T09:00:00.000Z",
  "endDate": "2027-05-11T18:00:00.000Z",
  "difficulty": "easy",
  "maxParticipants": 8
}
```
Difficulty values: `easy`, `medium`, `hard`.

## Project structure
```text
src/
  app.js
  config/
    database.js
    checkDatabase.js
  models/
    Trip.js
  controllers/
    tripController.js
  routes/
    tripRoutes.js
docs/
  api-examples.http
```
## License
MIT
