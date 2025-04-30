# Contact Book API

A Node.js and MySQL API for managing contacts. This project allows users to create, read, update, and delete contact entries. It uses MySQL as the database backend to store contact information, including first name, last name, email, and phone number.

## Table of Contents
- [Description](#description)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Technologies](#technologies)
- [License](#license)

## Description

This project is a simple API built using **Node.js** and **Express** for handling the backend, with **MySQL** as the database. The API supports basic CRUD operations to manage a contact book. The contact entries include information such as first name, last name, email, and phone number.

## Setup

To get this project up and running locally, follow the steps below:

### Prerequisites

- Node.js (version 14 or higher)
- MySQL database
- Git (to clone the repository)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/contact-book-api.git
Navigate to the Project Folder

bash
Copy code
cd contact-book-api
Install Dependencies

Run the following command to install the necessary dependencies:

bash
Copy code
npm install
Set up MySQL Database

Import the schema.sql file into your MySQL database to create the required tables:

sql
Copy code
CREATE DATABASE contact_book;
USE contact_book;

CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  phone_number VARCHAR(15)
);
Start the Server

Run the following command to start the Node.js server:

bash
Copy code
node server.js
The server will be available at http://localhost:3000.

API Endpoints
Here are the available API endpoints:

1. GET /contacts
Retrieves all contacts.

Response: A list of all contacts in the database.

Example:

json
Copy code
[
  {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "phone_number": "1234567890"
  },
  {
    "id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "phone_number": "0987654321"
  }
]
2. POST /contacts
Creates a new contact.

Body: The contact data in JSON format.

Example:

json
Copy code
{
  "first_name": "Emily",
  "last_name": "Clark",
  "email": "emily.clark@example.com",
  "phone_number": "1122334455"
}
Response: The newly created contact object, including the ID.

3. PUT /contacts/:id
Updates an existing contact.

Body: The contact data in JSON format.

Example:

json
Copy code
{
  "first_name": "Emily",
  "last_name": "Clark",
  "email": "new.email@example.com",
  "phone_number": "2233445566"
}
Response: The updated contact object.

4. DELETE /contacts/:id
Deletes a contact by ID.

Response: A success message.

Example:

json
Copy code
{
  "message": "Contact deleted successfully"
}
Technologies
Node.js: JavaScript runtime for server-side programming.

Express: Web framework for Node.js to handle routing and middleware.

MySQL: Relational database management system for storing contact data.

License
This project is open-source and available under the MIT License.

markdown
Copy code

### Steps to Add This `README.md` to Your Project

1. Create a file named `README.md` in the root of your project folder.
2. Paste the above content into the `README.md` file.
3. Save the file.
4. Commit the file to your Git repository:

   ```bash
   git add README.md
   git commit -m "Add README file"
   git push origin main