📚 Bookstore MERN-Stack Web Application

📖 Project Overview

A simple Bookstore Web Application built with MERN stack (MongoDB, Express, React, Node.js) and styled using Tailwind CSS.
Users can Add, Edit, Delete, and Search books by title, author, category, or description.

🛠️ Technologies & Packages Used

MongoDB – NoSQL database for storing books

Express.js – Backend framework

Node.js – Server-side runtime

React.js – Frontend UI library

Axios – For API requests

Tailwind CSS – Styling framework

🚀 Key Features

Add new books with title, author, category, and description

Edit and update existing books

Delete books

Search books dynamically by title, author, or category

Responsive and clean UI

⚡ Installation

Clone the Repository

git clone https://github.com/your-username/bookstore-app.git
cd bookstore-app


Install Dependencies

Frontend:

cd frontend
npm install


Backend:

cd backend
npm install


Set Up Environment Variables

Create .env files inside backend and frontend folders.

Backend .env:

PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/bookstore


Frontend .env:

VITE_BACKEND_URL=http://localhost:3000


Run the Application

Frontend:

npm run dev


Backend:

npm run dev


Open in browser: http://localhost:5173

📂 Project Structure
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public
│   ├── index.html
│   └── package.json
├── backend
│   ├── models
│   ├── routes
│   ├── controllers
│   ├── server.js
│   └── package.json
└── README.md

👨‍💻 Author
Pardeep Saini

🙏 Thank You

Thank you for exploring Bookstore App!
Your feedback is always welcome. 😊