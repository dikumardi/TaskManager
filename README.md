# TaskManager
# 📌 Task Management API

A simple and scalable Task Management API built with Node.js and MongoDB. This API allows users to create tasks and retrieve them using flexible filtering options such as status, priority, and keyword-based search.

---

## 🚀 Features

- Create new tasks  
- Retrieve tasks with dynamic filters  
- Filter by status (e.g., pending, completed)  
- Filter by priority (e.g., high, low)  
- Search tasks by title (case-insensitive)  
- Combine multiple filters for advanced querying  

---

## 📂 API Endpoints

### 🔹 Create Task
**POST /tasks**

Creates a new task.

**Request Body**
- `title` – Title of the task  

**Response**
- Returns a success message with the created task  

---

### 🔹 Get Tasks
**GET /tasks**

Fetch tasks with optional filters.

**Query Parameters**
- `status` – Filter by task status  
- `priority` – Filter by task priority  
- `search` – Search tasks by title  

**Example Queries**
- `/tasks?status=completed`  
- `/tasks?priority=high`  
- `/tasks?search=study`  
- `/tasks?status=pending&priority=high&search=study`  

**Response**
- Returns a list of filtered tasks  

---

## ⚙️ How It Works

- A dynamic filter object is created based on query parameters  
- Only provided filters are applied  
- Search uses pattern matching for flexible results  
- Data is fetched from the database and returned in JSON format  

---

## 🧠 Design Principles

- **Simplicity** – Easy to understand and use  
- **Scalability** – Ready for future enhancements  
- **Flexibility** – Supports multiple filter combinations  
- **Performance** – Efficient querying (indexing recommended)  

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- MongoDB (Mongoose)  

---

## 📦 Project Structure (Suggested)

- `controllers/` → Request handling logic  
- `models/` → Database schemas  
- `routes/` → API route definitions  

---

## 🔒 Future Improvements

- Authentication & Authorization  
- Update and delete tasks  
- Pagination support  
- Sorting options  
- API documentation (Swagger/Postman)  



