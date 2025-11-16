# Express + MongoDB (Mongoose) API

This is a simple Node.js REST API built using **Express.js**, **MongoDB**, and **Mongoose**.  
It allows you to create and read person records.

---

## 📦 Features

- Connects to MongoDB using Mongoose
- Create a new person (POST `/person`)
- Get all persons (GET `/person`)
- Fetch only selected fields (e.g., names only)
- Clean folder structure
- Node modules ignored using `.gitignore`

---

## 📁 Project Structure



/project-folder
│── db.js
│── server.js
│── models
│ └── person.js
│── package.json
│── .gitignore
│── README.md

---

## 🚀 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo


npm install

mongodb://localhost:27017/

npx nodemon server.js
http://localhost:3000


🧪 API Endpoints
➤ POST /person

Create a new person.

Request Body (JSON)
{
  "name": "test",
  "age": 28,
  "work": "manager",
  "email": "test@example.com",
  "phone": "0123456789",
  "address": "India",
  "salary": 25000
}

➤ GET /person

Get all persons.

➤ GET /person (Names Only Example)
Person.find({}, { name: 1, _id: 0 });

🛠 Technologies Used

Node.js

Express.js

MongoDB

Mongoose

Nodemon (optional)

🧾 License

This project is open-source and free to use.

👤 Author

Aakash Rathour
Feel free to reach out or contribute!


---

If you want, I can also add:

✅ Badges (Node, Express, MongoDB)  
✅ Screenshots  
✅ API documentation section  
✅ Environment variables section  
