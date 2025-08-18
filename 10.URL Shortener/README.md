# 🔗 URL Shortener

A simple and efficient **URL Shortener** built with **Node.js, Express, PostgreSQL, and Drizzle ORM**.  
This project provides REST APIs to shorten long URLs and redirect users to the original links.

---

## 🛠️ Tech Stack Overview

| Category           | Technology        | Purpose                                   |
|--------------------|------------------|-------------------------------------------|
| Backend            | Node.js + Express| REST API development                      |
| Database           | PostgreSQL       | Relational data store                     |
| ORM                | Drizzle ORM      | Type-safe database queries and schema     |
| Containerization   | Docker + Compose | Local PostgreSQL instance                 |
| Authentication     | JWT              | Securing private routes                   |
| Testing Tool       | Postman          | Manual API testing                        |

---

## 📌 Features
- ✅ Shorten any long URL into a short one  
- ✅ Redirect short URLs to the original URL  
- ✅ User authentication with JWT  
- ✅ Store and manage URLs in PostgreSQL  
- ✅ Dockerized setup for database  

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/<your-username>/url-shortener-node.git
cd url-shortener-node
````

### 2. Install dependencies

```bash
pnpm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=postgres://<user>:<password>@localhost:5432/url_shortener
JWT_SECRET=your_jwt_secret
```

### 4. Run with Docker (Postgres only)

```bash
docker compose up -d
```

### 5. Start the server

```bash
pnpm dev
```

---

## API Endpoints

| Method | Endpoint      | Description          | Auth Required |
| ------ | ------------- | -------------------- | ------------- |
| POST   | `/signup`     | Register a new user  | ❌             |
| POST   | `/login`      | User login           | ❌             |
| POST   | `/shorten`    | Create short URL     | ✅             |
| GET    | `/:shortCode` | Redirect to long URL | ❌             |

---

## Testing

Use **Postman** collection provided in `/postman` folder to test APIs manually.

---

## 📂 Project Structure

```
url-shortener-node/
│── src/
│   ├── routes/         # Express routes
│   ├── controllers/    # Request handlers
│   ├── db/             # Drizzle ORM schemas & migrations
│   ├── middleware/     # Auth middleware
│   └── index.js        # Entry point
│
│── docker-compose.yml  # PostgreSQL container setup
│── .env                # Environment variables
│── package.json
│── README.md
```

---
## 📜 License

This project is licensed under the **MIT License**.

