Perfect 👍
Below is a **professional, complete README.md** that:

* Explains **what the project is**
* Shows **features**
* Gives **step-by-step setup instructions** (MySQL + Backend + Frontend)
* Works for **anyone running it on their own device**
* Is **ideal for GitHub + evaluation**

You can **copy–paste this directly** into your `README.md` (root of the repo or inside `frontend/`, both are fine).

---

# 📘 Campus Resource Sharing & Lost–Found Portal

A **full-stack campus-focused web application** designed for students of **ITER, SOA University, Bhubaneswar** to:

* Share unused academic resources (books, notes, lab items)
* Report and find lost or found items inside the campus
* Promote collaboration, sustainability, and community engagement

---

## 🚀 Features

### 📚 Resource Sharing

* Add and view shared resources
* Includes category, availability, and contact details
* Data stored persistently using MySQL

### 🔍 Lost & Found

* Report lost or found items
* Visual distinction:

  * 🔴 Lost items (red)
  * 🟢 Found items (green)
* Case-safe status handling
* Persistent storage using MySQL

### 🎨 User Interface

* Responsive and clean UI using **Bootstrap**
* Card-based layout for better readability
* Simple and intuitive navigation

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* Bootstrap 5
* React Router DOM

### Backend

* Node.js
* Express.js
* REST APIs

### Database

* MySQL

---

## 📂 Project Structure

```
campus-portal/
│
├── frontend/          # React + Bootstrap frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
└── backend/           # Node + Express backend
    ├── routes/
    ├── config/
    ├── server.js
    └── package.json
```

---

## ⚙️ Prerequisites

Make sure the following are installed on your system:

* Node.js (v18+ recommended)
* npm
* MySQL Server
* MySQL Workbench (optional but recommended)
* Git (optional)

---

## 🗄 Database Setup (MySQL)

1. Open **MySQL Workbench**
2. Connect to your local MySQL server
3. Run the following SQL commands:

```sql
CREATE DATABASE campus_portal;
USE campus_portal;

CREATE TABLE resources (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  category VARCHAR(50),
  availability VARCHAR(20),
  contact VARCHAR(100)
);

CREATE TABLE lost_found (
  id INT AUTO_INCREMENT PRIMARY KEY,
  item_name VARCHAR(100),
  location VARCHAR(100),
  status VARCHAR(20),
  contact VARCHAR(100)
);
```

---

## 🔧 Backend Setup

1. Open terminal and navigate to backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Update MySQL credentials in:

```
backend/config/db.js
```

```js
user: "root",
password: "YOUR_MYSQL_PASSWORD",
database: "campus_portal"
```

4. Start backend server:

```bash
npm start
```

✅ Backend runs at:
`http://localhost:5000`

---

## 🎨 Frontend Setup

1. Open a **new terminal**
2. Navigate to frontend folder:

```bash
cd frontend
```

3. Install dependencies:

```bash
npm install
```

4. Start frontend server:

```bash
npm run dev
```

✅ Frontend runs at:
`http://localhost:5173`

---

## ▶️ How to Run the Application

You must run **both backend and frontend simultaneously**:

| Service  | Command                      |
| -------- | ---------------------------- |
| Backend  | `cd backend && npm start`    |
| Frontend | `cd frontend && npm run dev` |

Then open browser and go to:

```
http://localhost:5173
```

---

## 🧪 How to Test

### Resource Sharing

1. Go to **Resources**
2. Add a resource
3. Refresh page → data persists

### Lost & Found

1. Go to **Lost & Found**
2. Report a lost or found item
3. Status color changes automatically
4. Refresh page → data persists

---

## 🧠 Key Learning Outcomes

* React component-based architecture
* REST API development using Express
* MySQL database integration
* Full-stack data flow (Frontend → Backend → Database)
* Responsive UI using Bootstrap

---

## 🎓 Academic Relevance

This project is suitable for:

* 7th Semester Major Project
* Full-stack web development demonstration
* Database-integrated application showcase


## 👨‍💻 Developed By

**Himanshu Patro**
**Prakash Behuria**
**Kumar Gopal Ballav Rai**
**Laren Kumar Sethy**
ITER, SOA University
Computer Science & Information Technology

---

## 📄 License

This project is developed for **academic purposes**.


