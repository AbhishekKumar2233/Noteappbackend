# 📝 Note App Backend

A backend REST API for a Notes Application built using **Node.js** and **Express.js**. It provides authentication and basic note management features with a simple and clean structure.

---

## 🚀 Features

* User Registration & Login
* JWT Authentication
* Create, Read, Delete Notes
* Protected Routes using middleware
* RESTful API structure

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (Authentication)
* Bcrypt
* Dotenv

---

## 📁 Project Structure

```text id="structure-final"
src/
├── config/
├── models/
├── routes/
├── middleware/
├── utils/
├── server.js
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash id="clone-final"
git clone https://github.com/AbhishekKumar2233/Noteappbackend.git
```

### 2. Move into project directory

```bash id="cd-final"
cd Noteappbackend
```

### 3. Install dependencies

```bash id="install-final"
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env id="env-final"
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Run the Server

### Development mode

```bash id="dev-final"
npm run dev
```

### Production mode

```bash id="start-final"
npm start
```

Server will run at:

```text id="url-final"
http://localhost:8000
```

---

## 📌 API Endpoints

### Auth Routes

* POST `/register` → Register a new user
* POST `/login` → Login user

### Notes Routes (Protected)

* GET `/notes` → Get all notes
* POST `/notes` → Create a new note
* DELETE `/notes/:id` → Delete a note

---

## 🔒 Authentication

Send JWT token in request headers for protected routes:

```text id="auth-final"
Authorization: Bearer <token>
```

---

## 🧪 Testing

You can test APIs using:

* Postman
* Thunder Client
* Insomnia

---

## 👨‍💻 Author

**Abhishek Kumar**

GitHub: [AbhishekKumar2233](https://github.com/AbhishekKumar2233)

---

## 📄 License

This project is open-source and free to use.
