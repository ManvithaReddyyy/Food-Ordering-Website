# 🍽️ MARK – Chain of Restaurants

💻 Full-Stack Food Ordering Web Application – Project Description  
A production-ready full-stack food ordering system that supports end-to-end online food purchase workflows, including user-side interactions and admin-side management. The application enables users to browse menu items, manage a shopping cart, place orders using Stripe-based online payments, and receive real-time order status updates. On the admin side, it features a dedicated dashboard for menu item management, order tracking, and delivery status control. The system is designed to be scalable, responsive, and secure, simulating the core functionalities of a modern online food delivery platform.

🔧 Key Features  
✅ User Authentication – Secure login/signup system using JWT  
✅ Dynamic Menu Display – Users can browse and search available food items  
✅ Cart System – Add, remove, and modify items in a persistent shopping cart  
✅ Checkout & Payments – Seamless integration with Stripe API for real-time, secure online payments  
✅ Order Placement – Orders are stored and tracked in a MongoDB database  
✅ Real-Time Order Status – Admin can update status: Food Processing → Out for Delivery → Delivered, and it reflects instantly in the user’s "My Orders" page  
✅ Admin Dashboard – Add/update/delete menu items, view all orders, update order statuses

🚀 Tech Stack  
Frontend: React.js (Vite)  
Backend: Node.js + Express.js  
Database: MongoDB  
Authentication: JWT  
Payments: Stripe Checkout  
Admin Panel: React (Vite)  
Styling: CSS

🗂️ Folder Structure  
mark/  
├── frontend/       → Customer-facing React app  
├── backend/        → Node.js/Express server + MongoDB  
├── admin/          → Admin panel (React)  
└── README.md       → Project guide

⚙️ Setup Instructions

1. Clone the repository  
```bash
git clone https://github.com/your-username/mark-restaurant-app.git  
cd mark-restaurant-app

2. Install dependencies

Frontend:

bash
Copy code
cd frontend  
npm install
Backend:

bash
Copy code
cd ../backend  
npm install
Admin Panel:

bash
Copy code
cd ../admin  
npm install

3. Create .env file in /backend
Inside /backend, create a file named .env with the following content:

env
Copy code
PORT=5000  
MONGODB_URL=your_mongodb_connection_url  
JWT_SECRET_KEY=your_jwt_secret_key  
STRIPE_SECRET_KEY=your_stripe_secret_key

4. Start the project

Backend:

bash
Copy code
cd backend  
npm run dev
Frontend:

bash
Copy code
cd frontend  
npm run dev
Admin Panel:

bash
Copy code
cd admin  
npm run dev

DEMO - 