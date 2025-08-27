# Tomato - Full Stack Food Delivery Website

A modern, full-stack food delivery web application built with the MERN stack (MongoDB, Express.js, React, Node.js). This platform allows users to browse restaurants, add items to their cart, and place orders for delivery.

## 🖼️ Screenshots

| Home Page | Menu & Cart | Admin Dashboard |

<img width="1920" height="1080" alt="Screenshot (104)" src="https://github.com/user-attachments/assets/89565462-9bd1-4503-ba52-f4e0729b4b21" />
<img width="1920" height="1080" alt="Screenshot (103)" src="https://github.com/user-attachments/assets/71631e57-6049-41e8-8c59-a7f4941c3352" />
<img width="1920" height="1080" alt="Screenshot (121)" src="https://github.com/user-attachments/assets/53ddb871-0d53-4310-a2b2-3777eebb36f4" />
<img width="1920" height="1080" alt="Screenshot (120)" src="https://github.com/user-attachments/assets/d2996576-f254-4bc7-bdc1-c1aff4069cf0" />
<img width="1920" height="1080" alt="Screenshot (119)" src="https://github.com/user-attachments/assets/8d4838e0-b820-49df-a08f-556f48577ac2" />
<img width="1920" height="1080" alt="Screenshot (118)" src="https://github.com/user-attachments/assets/c117e044-c177-443a-b7ec-eafa8fb57450" />
<img width="1920" height="1080" alt="Screenshot (117)" src="https://github.com/user-attachments/assets/eef56cd9-2519-4dfa-a60b-7232632d5cbc" />
<img width="1920" height="1080" alt="Screenshot (116)" src="https://github.com/user-attachments/assets/4373ce7a-e03e-4cce-9af9-2174972d5718" />
<img width="1920" height="1080" alt="Screenshot (115)" src="https://github.com/user-attachments/assets/4ab6e9fd-5b4c-4560-a8b7-4850c105dcce" />
<img width="1920" height="1080" alt="Screenshot (114)" src="https://github.com/user-attachments/assets/a91bd605-36c5-4946-8b5e-28ad182760c9" />
<img width="1920" height="1080" alt="Screenshot (113)" src="https://github.com/user-attachments/assets/c2593961-6df0-4a8f-926b-0b6b35ddb33d" />
<img width="1920" height="1080" alt="Screenshot (112)" src="https://github.com/user-attachments/assets/05c28564-3b75-489f-9f5f-9fe3bdc61c8d" />
<img width="1920" height="1080" alt="Screenshot (111)" src="https://github.com/user-attachments/assets/c0e59735-bf50-450e-90fa-c81e5e48230f" />
<img width="1920" height="1080" alt="Screenshot (110)" src="https://github.com/user-attachments/assets/4c00eb16-ce8a-4607-9c1f-a16e457d3966" />
<img width="1920" height="1080" alt="Screenshot (109)" src="https://github.com/user-attachments/assets/e90f4bcb-b647-43c0-84ce-358eaba913b6" />
<img width="1920" height="1080" alt="Screenshot (108)" src="https://github.com/user-attachments/assets/d3467e44-0051-4ab0-b217-9a960d76437a" />
<img width="1920" height="1080" alt="Screenshot (107)" src="https://github.com/user-attachments/assets/c8491c16-b28d-43b7-80a8-8cc5fcea27b2" />
<img width="1920" height="1080" alt="Screenshot (106)" src="https://github.com/user-attachments/assets/fcc8f40a-8f57-4c54-9653-6e8b2757194d" />
<img width="1920" height="1080" alt="Screenshot (105)" src="https://github.com/user-attachments/assets/a7924a2e-870a-45c5-b9b3-590d73e2d72d" />


## ✨ Features

### 👤 User Features
- **User Authentication & Authorization:** JWT-based secure login/signup
- **Browse Restaurants:** View a list of available restaurants
- **Explore Menus:** Browse food items with details, categories, and prices
- **Advanced Filtering:** Filter restaurants and food by category, price, and ratings
- **Shopping Cart:** Add/remove items, adjust quantities, and see the total cost in real-time
- **Order Management:** Place orders and view order history with status tracking (Pending, Confirmed, Out for Delivery, Delivered)
- **User Profile:** Manage personal details and delivery addresses
- **Online Payment:** Integrated Stripe payment gateway for secure checkout
- **Search:** Search for specific restaurants or food items

### 🛠️ Admin Features
- **Admin Dashboard:** Overview of sales, orders, and users
- **Manage Menu:** Add, edit, or delete food items and categories
- **Manage Restaurants:** Add or manage restaurant partners
- **Order Management:** View and update the status of all customer orders
- **User Management:** View all registered users

## 🛠️ Tech Stack

### Frontend
- **React** (v18) - UI library
- **React Router DOM** - Client-side routing
- **Context API** - State management
- **Axios** - HTTP client for API requests
- **CSS3** - Styling
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JSON Web Token (JWT)** - Authentication
- **Bcryptjs** - Password hashing
- **Multer** - File upload handling
- **Stripe API** - Payment processing

### Deployment
- **Frontend:** Vercel
- **Backend:** Railway/Render
- **Database:** MongoDB Atlas
- **File Storage:** Local storage with Multer

## 📦 Installation & Setup

Follow these steps to set up the project locally on your machine.

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB installation
- Git

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd food-delivery-app
