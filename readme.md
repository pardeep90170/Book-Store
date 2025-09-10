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

## 📘 Sample Books Data (JSON)

Below is the sample dataset of **10 books** used in this project.  
These books include **duplicate authors, overlapping categories, and common words** in their description so that the **search functionality** can be properly tested.  

```json
[
  {
    "title": "Learn React Quickly",
    "author": "John Doe",
    "category": "Programming",
    "description": "A beginner friendly guide to learn React step by step.",
    "price": 450
  },
  {
    "title": "Mastering Node.js",
    "author": "Jane Smith",
    "category": "Programming",
    "description": "In-depth Node.js concepts with backend development techniques.",
    "price": 550
  },
  {
    "title": "Python for Data Science",
    "author": "John Doe",
    "category": "Data Science",
    "description": "Learn data analysis, visualization, and ML using Python.",
    "price": 600
  },
  {
    "title": "Big Data Essentials",
    "author": "David Johnson",
    "category": "Data Science",
    "description": "Introduction to Big Data tools, technologies, and analytics.",
    "price": 700
  },
  {
    "title": "Clean Code",
    "author": "Robert Martin",
    "category": "Programming",
    "description": "Best practices and principles for writing clean, maintainable code.",
    "price": 800
  },
  {
    "title": "JavaScript: The Good Parts",
    "author": "Douglas Crockford",
    "category": "Programming",
    "description": "A deep dive into JavaScript fundamentals and best practices.",
    "price": 500
  },
  {
    "title": "MongoDB Basics",
    "author": "Jane Smith",
    "category": "Database",
    "description": "Understanding MongoDB fundamentals for developers.",
    "price": 400
  },
  {
    "title": "Express.js in Action",
    "author": "David Johnson",
    "category": "Backend",
    "description": "Build scalable APIs using Express.js and middleware concepts.",
    "price": 550
  },
  {
    "title": "Data Structures & Algorithms",
    "author": "Robert Martin",
    "category": "Computer Science",
    "description": "Core CS concepts with examples in multiple programming languages.",
    "price": 650
  },
  {
    "title": "AI Fundamentals",
    "author": "John Doe",
    "category": "Artificial Intelligence",
    "description": "Overview of AI concepts, neural networks, and applications.",
    "price": 900
  }
]
