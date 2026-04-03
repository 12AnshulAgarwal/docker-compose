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
