# 🍽️ MARK – Chain of Restaurants

A full-stack food ordering web application built with **React.js**, **Node.js**, and **MongoDB**, featuring real-time order tracking, secure payments via Stripe and a powerful admin dashboard.
Demo - https://drive.google.com/file/d/18MWUdek-F-zumwlzidRWYXoNLMllXwgI/view?usp=sharing

## Features

- **User Authentication** – Secure login/signup using JWT  
- **Dynamic Menu** – Browse and search food items  
- **Cart System** – Add, remove, and modify items in a persistent cart  
- **Stripe Checkout** – Real-time, secure online payments  
- **Order Status Tracking** – Real-time updates on orders: *Processing → Out for Delivery → Delivered*  
- **Admin Dashboard** – Manage menu items, view all orders, and update statuses  

## Tech Stack

- **Frontend:** React.js  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JSON Web Tokens (JWT)  
- **Payments:** Stripe API  
- **Styling:** CSS  

## 1. Clone the Repository
```bash
git clone https://github.com/ManvithaReddyyy/Food-Ordering-Website.git
cd Food-Ordering-Website
```


## 2. Install Dependencies
Frontend
```bash
cd frontend
npm install
```
Backend
```bash
cd backend
npm install
```
Admin Panel
```bash
cd admin
npm install
```

## 3. Configure Environment Variables
Create a .env file inside the backend directory and add :
```bash
PORT=5000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## 4. Run the Project
Start Backend
```bash
cd backend
npm run dev
```
Start Frontend
```bash
cd frontend
npm run dev
```
Start Admin Panel
```bash
cd admin
npm run dev
```

