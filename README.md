# 🚽 Toilet Project

A modern full-stack web application for managing toilet-related services, bookings, or information. Built with a responsive user interface and secure backend APIs to provide a seamless user experience.

## 🌐 Live Demo

* **Frontend:** https://your-frontend-url.vercel.app
* **Backend:** https://your-backend-url.vercel.app

## 📂 GitHub Repository

* **Client:** https://github.com/your-username/toilet-project-client
* **Server:** https://github.com/your-username/toilet-project-server

---

## 📖 Project Overview

The Toilet Project is designed to simplify the management of toilet facilities by allowing users to browse available services, view details, and interact with the platform through a clean and user-friendly interface. The application focuses on performance, accessibility, and responsive design.

---

## ✨ Features

* 🔐 Secure Authentication (Login & Registration)
* 👤 User Dashboard
* 🚽 Browse Toilet Facilities
* 🔍 Search and Filter Functionality
* 📱 Fully Responsive Design
* ⚡ Fast Loading with Next.js
* 🗂️ CRUD Operations
* 🔒 Protected Routes
* 🌙 Modern UI with Tailwind CSS
* 📊 Admin Dashboard (if applicable)

---

## 🛠️ Tech Stack

### Frontend

* Next.js
* React.js
* TypeScript
* Tailwind CSS
* Axios
* React Hook Form
* React Icons
* Sonner / React Toastify

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt
* CORS
* dotenv

---

## 📁 Folder Structure

```bash
client/
│── app/
│── components/
│── hooks/
│── lib/
│── public/
│── styles/

server/
│── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│── .env
│── package.json
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/toilet-project-client.git
```

```bash
git clone https://github.com/your-username/toilet-project-server.git
```

---

## 📦 Install Dependencies

### Client

```bash
cd client
npm install
```

### Server

```bash
cd server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the server directory.

```env
PORT=5000

DATABASE_URL=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:3000
```

Frontend `.env.local`

```env
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
```

---

## ▶️ Run the Project

### Backend

```bash
npm run dev
```

### Frontend

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### Authentication

```
POST /api/auth/register
POST /api/auth/login
GET /api/auth/profile
```

### Toilet

```
GET /api/toilets
GET /api/toilets/:id
POST /api/toilets
PATCH /api/toilets/:id
DELETE /api/toilets/:id
```

---

## 📸 Screenshots

Add screenshots here.

```
public/screenshots/home.png
public/screenshots/dashboard.png
```

---

## 🚀 Deployment

### Frontend

* Vercel

### Backend

* Vercel / Render / Railway

---

## 👨‍💻 Author

**Your Name**

* GitHub: https://github.com/your-username
* LinkedIn: https://linkedin.com/in/your-profile

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you like this project, don't forget to give it a star on GitHub!
