******************MERN Authentication System with Role-Based Access Control*******************************
///Objective
---This project implements a basic MERN authentication system with two roles: Admin and User. The goal is to test the ability to build a full-stack application with robust role-based access control (RBAC).

///////////////Features***************************
Admin Role
Login using email and password.
Manage Users:
Add, edit, and delete users.
Assign specific roles or permissions.
User Role
Login using email and password.
Access a personal dashboard displaying:
A welcome message.
Basic profile details.
Authentication and Authorization
Secure login sessions using JWT.
Route protection on both frontend and backend to ensure role-based access:
Admin: Full access to user management features.
User: Restricted to their personal dashboard only.
Requirements
Simple and functional UI without advanced designs.
CRUD operations for managing users (Admin only).
Tech Stack
Frontend
React with functional components.
React Router for navigation and route protection.
Backend
Node.js with Express for API and server-side logic.
Database
MongoDB for user and role data storage.
Authentication
JSON Web Tokens (JWT) for secure session management.
Getting Started
Prerequisites
Ensure the following are installed on your system:

Node.js
MongoDB
Yarn or npm

///////////////Install dependencies:///////////////


******************** npm install  *******************************88


backend/  
├── controllers/        # Handles business logic  
├── models/             # MongoDB schemas  
├── routes/             # API routes  
├── middleware/         # Authentication & authorization logic  
└── server.js           # Main server file  

**************RUN BY npm start********************************
*******************Open your browser and navigate to http://localhost:5000.******************







