

# BookStore API

A simple **Node.js + Express** backend API for managing a mock bookstore.
This project demonstrates basic REST API concepts including CRUD operations, route handling, and API testing with Postman/Thunder Client.

---

## 🚀 Features

* Fetch all books
* Fetch a single book by **ID**
* Add a new book
* Delete a book by **ID**
* Mock data for demonstration (no database)

---

## 🛠️ Steps Followed

### 1. **Project Initialization**

* Initialized the project with `npm init -y`
* Installed required dependencies:

  * **express** for server handling
  * **nodemon** (dev dependency) for automatic restarts

---

### 2. **Setup Basic Express Server**

* Created an `index.js` file
* Imported **express**
* Setup a basic server with a listening port

---

### 3. **Create BookStore (Mock Data)**

* Created a `bookStore.js` file (or inside `index.js`)
* Added an array of objects representing books with:

  * `id`
  * `title`
  * `author`

---

### 4. **Setup GET Route — Fetch All Books**

* Created a GET route `/books`
* Returned all books from the mock data

---

### 5. **Setup GET Route — Fetch Book by ID**

* Created a GET route `/books/:id`
* Retrieved a book by its ID
* Returned a message if the book was not found

---

### 6. **Setup DELETE Route — Remove Book by ID**

* Created a DELETE route `/books/:id`
* Removed the matching book from the array

---

### 7. **Setup POST Route — Add New Book**

* Created a POST route `/books`
* Added a new book object to the mock data array
* Used `express.json()` middleware for parsing JSON requests

---

### 8. **Test All Routes**

* Used **Postman** or **Thunder Client** to test:

  * GET all books
  * GET book by ID
  * POST new book
  * DELETE book by ID

---

## 📌 Example Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/books`     | Get all books     |
| GET    | `/books/:id` | Get book by ID    |
| POST   | `/books`     | Add a new book    |
| DELETE | `/books/:id` | Delete book by ID |

---

## 🧪 Testing

* Import API endpoints into **Postman**
* Send requests with correct HTTP method
* Verify response data

---

## 📄 License

This project is for learning purposes only. Feel free to modify and extend.

