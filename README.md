# 🛒 E-Commerce API

A RESTful API for an e-commerce application built with **Node.js**, **Express**, **Prisma ORM**, and **PostgreSQL**.

> 🚧 **Project Status:** Under Development

---

# 📖 Overview

This project is part of my backend development learning journey. The goal is to build a scalable and maintainable REST API by following best practices in software architecture, authentication, and database management.

The project is currently under active development, and new features will be added over time.

---

# 🚀 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT (JSON Web Tokens)
- bcrypt
- dotenv

---

# 📂 Project Structure

```text
src/
│
├── controllers/
├── middleware/
├── prisma/
├── routes/
├── services/
├── utils/
└── server.js
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/marconovas/ecommerce-api.git
```

Navigate into the project directory:

```bash
cd your_repository
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
DATABASE_URL="postgresql://..."
JWT_SECRET="your_secret_key"
PORT=3000
```

Run the database migrations:

```bash
npx prisma migrate dev
```

Start the development server:

```bash
npm run dev
```

---

# 📌 Current Features

## Authentication

- User registration
- User login
- Password hashing with bcrypt
- JWT authentication

## Products

- Get all products
- Get product by ID
- Create products
- Update products
- Delete products

---

# 🚧 Planned Features

- Categories
- Shopping cart
- Orders
- User roles and authorization
- Request validation
- Global error handling
- Swagger/OpenAPI documentation
- Unit and integration tests
- Deployment

---

# 🗄️ Database

The project uses **PostgreSQL** with **Prisma ORM**.

Current entities include:

- Users
- Products
- Categories
- Orders
- OrderItems

---

# 📫 API Endpoints

## Authentication

| Method | Endpoint |
|--------|----------|
| POST | `/auth/register` |
| POST | `/auth/login` |

## Products

| Method | Endpoint |
|--------|----------|
| GET | `/products` |
| GET | `/products/:id` |
| POST | `/products` |
| PUT | `/products/:id` |
| DELETE | `/products/:id` |

---

# 📈 Project Status

This project is actively being developed. The architecture, endpoints, and features may evolve as new functionality is implemented.

---

# 👨‍💻 Author

Developed by **Marco Novas** as a backend practice project to improve skills in:

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- REST API development
- JWT Authentication
- Backend Architecture
