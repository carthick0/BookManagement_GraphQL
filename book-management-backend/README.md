# 📚 Book Management GraphQL API

A GraphQL API built with TypeScript, Apollo Server, Prisma ORM, and a clean MVC (Model-View-Controller) architecture to manage books and authors.

---

## 📦 Tech Stack

- **GraphQL** – API query language  
- **Apollo Server** – GraphQL server  
- **Prisma ORM** – Database access  
- **TypeScript** – Static typing  
- **MVC Pattern** – Structured code with Repository, Service, and Controller layers  

---

## 🚀 Features

- Add, retrieve, update, and delete books  
- Add and retrieve authors  
- Nested queries (e.g., get books with their authors, or authors with their books)  
- Type-safe layers using TypeScript  
- Prisma-powered database integration  

---

## 📁 Project Structure

src/
├── config/ # Prisma config
│ └── prisma_config.ts
├── controllers/ # Controller layer
├── services/ # Business logic layer
├── repositories/ # DB operations (CRUD)
├── schema/ # GraphQL typeDefs and resolvers
├── index.ts # Entry point
└── prisma/
└── schema.prisma # Prisma DB schema

yaml
Copy
Edit

---

## 🧰 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/carthick0/BookManagement_GraphQL.git
cd book-management-graphql
npm install

2. Set up Prisma

npx prisma init

DATABASE_URL="postgresql://user:password@localhost:5432/book_management"
Then run:

bash

npx prisma migrate dev --name init
npx prisma generate

3. Run the Server
bash
Copy
Edit
npx ts-node src/index.ts

Server will run at: http://localhost:4000