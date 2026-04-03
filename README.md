# Dockerized Backend API using Docker Compose

A simple Node.js + Express backend application containerized using Docker and orchestrated with Docker Compose.  
This project demonstrates core Docker concepts such as containerization, environment variables, and multi-service readiness.

---

## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **Docker**
- **Docker Compose**
- **Amazon EC2 (Linux)**

---

## 📌 Features

- REST API built with Express.js
- Fully Dockerized backend
- Docker Compose for service orchestration
- Environment variable support
- One-command application startup
- Ready to integrate with a frontend or other services

---

## 📂 Project Structure
backend-docker/
├── src/
│   └── index.js          # Express application source code
├── Dockerfile            # Docker image definition
├── docker-compose.yml    # Multi-container orchestration file
├── package.json          # Node.js dependencies and scripts
├── .dockerignore         # Files ignored during Docker build
├── .env.example          # Sample environment variables
└── README.md             # Project documentation
---

## ⚙️ Environment Variables

The application uses environment variables for configuration.

Create a `.env` file in the project root:

```env
PORT=3000
```
## 🐳 Running the Application (Using Docker Compose)
1️⃣ Build and start the container

```
docker compose up -d
```
2️⃣ Verify running containers

```
docker compose ps
```
## 🔍 API Endpoints
✅ Health Check

```
GET /health
```
Response:
OK

✅ Sample API Response
```
GET /api/message
```
Response:
{
  "message": "Hello from Dockerized Backend 🚀"
}

##🛑 Stopping the Application
```
docker compose down
```
## What I Learned from This Project
- Writing Dockerfiles for Node.js applications
- Containerizing backend services
- Using Docker Compose for orchestration
- Managing environment variables in containers
- Running containerized applications on a cloud VM (EC2)
- Debugging common Docker and Linux issues
