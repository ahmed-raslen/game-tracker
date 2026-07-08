# Game Tracker

A full-stack web application for tracking video games. Users can browse, add, edit, delete, and organize their game collection.
Built with **React**, **Django REST Framework**, **PostgreSQL**, and **Docker**.
---
## Features

- View all games
- Add a new game
- Edit existing games
- Delete games
- Store game information in PostgreSQL
- REST API with Django REST Framework
- Responsive React frontend
- Dockerized development environment

---

## Tech Stack

### Frontend
- React
- JavaScript
- Vite
- CSS

### Backend
- Django
- Django REST Framework
- Python

### Database
- PostgreSQL

### DevOps
- Docker
- Docker Compose

### Version Control
- Git
- GitHub

## Project Structure
```
game-tracker/
│
├── backend/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── ...
│
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   └── ...
│
├── docker-compose.yml
└── README.md
```
## ⚙️ Prerequisites

Before running the project, install:

- Docker Desktop
- Git

---

## ▶️ Running the Project

Clone the repository:

```bash
git clone https://github.com/ahmed-raslen/game-tracker.git
```

Move into the project:

```bash
cd game-tracker
```

Build and start the containers:

```bash
docker compose up --build
```

---

## 🌐 Application URLs

Frontend:

```
http://localhost:5173
```

Backend:

```
http://localhost:8000
```

Django Admin:

```
http://localhost:8000/admin
```
---

## 🗄️ Database

The project uses PostgreSQL running inside Docker.

Database credentials are configured through Docker Compose.

---

## 🐳 Docker

The application consists of three containers:

| Service | Description |
|----------|-------------|
| frontend | React application |
| backend | Django REST API |
| db | PostgreSQL database |

Start containers:

```bash
docker compose up
```

Stop containers:

```bash
docker compose down
```

Rebuild containers:

```bash
docker compose up --build
```
View running containers:
```bash
docker ps
```

---

## API

Example endpoints:

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/games/ | Get all games |
| POST | /api/games/ | Add a game |
| PUT | /api/games/{id}/ | Update a game |
| DELETE | /api/games/{id}/ | Delete a game |

---
## Future Improvements

- User authentication
- Search games
- Pagination
- Dark mode
- Image uploads
- Deployment
- CI/CD with GitHub Actions

---
## Author

Ahmed

GitHub:
https://github.com/ahmed-raslen

---

## License

This project is for educational and portfolio purposes.
