# 🍽️ Recipe Finder – Full Stack Web App

A full-stack Recipe Finder application that allows users to search for recipes and view details instantly.

Built using **React (Vite) + FastAPI** with clean UI and environment-based API integration.

---

## 🚀 Features

- 🔍 Search recipes by name
- 📡 FastAPI backend for API handling
- ⚡ Axios for API requests
- 🎨 Responsive and clean UI
- 🌍 Environment-based configuration
- ❌ Error handling for failed requests
- 📦 Modular folder structure

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- CSS
- Axios

### Backend
- FastAPI
- Python
- Uvicorn

---

## 📂 Project Structure


recipe-finder
│── backend
│ └── FastAPI app
│
│── frontend
│ └── React (Vite) app
│
└── README.md


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/harsh-0905/recipe-finder
cd recipe-finder
2️⃣ Backend Setup (FastAPI)
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload

Backend runs on:

http://127.0.0.1:8000
3️⃣ Frontend Setup (React)
cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173
🔑 Environment Variable

Create a .env inside frontend:

VITE_API_URL=http://127.0.0.1:8000

🌐 Future Improvements

⭐ Add recipe details page

❤️ Favorites feature

🔐 Authentication
👨‍💻 Author

Harsh Yadav
