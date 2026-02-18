# Node.js + PostgreSQL Starter (Windows & Ubuntu)

## 1. Create Project

### Windows (PowerShell / CMD)

```bash
mkdir node-postgres-basic
cd node-postgres-basic
npm init -y
```

### Ubuntu / Linux / Mac

```bash
mkdir node-postgres-basic
cd node-postgres-basic
npm init -y
```

---

## 2. Install Dependencies

```bash
npm install express pg dotenv
npm install --save-dev nodemon
```

---

## 3. Create Project Files

### Windows

```bash
type nul > server.js
type nul > db.js
type nul > .env
type nul > README.md
```

### Ubuntu / Linux / Mac

```bash
touch server.js db.js .env README.md
```

---

## 4. Setup `.env`

```
PORT=3002

DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=testdb
DB_PORT=5432
```

---

## 5. Create Database

```bash
psql -U postgres
```

```sql
CREATE DATABASE testdb;
```

---

## 6. Create Table

```bash
psql -U postgres -d testdb
```

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);

INSERT INTO users(name,email)
VALUES ('John Doe','john@gmail.com');
```

---

## 7. Add scripts to package.json

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---

## 8. Run project

```bash
npm run dev
```

Open:

```
http://localhost:3002/users
```

---

## 9. Project structure

```
node-postgres-basic
│── server.js
│── db.js
│── .env
│── package.json
│── README.md
```
