E-Commerce Website with Microservices Architecture

Overview

 
This project is a fully functional e-commerce platform developed using a microservices architecture. Each service is dedicated to a specific functionality and runs independently. The services are:

UserAuth: Handles user authentication.

UserDetails: Manages user profile information.

Products: Manages the product catalog.

Cart: Handles cart operations.

Orders: Manages user orders.

Payment Gateway: Handles payment processing.

The frontend of the website includes a machine learning model integrated into a Python terminal for recommendations, with terminal outputs provided as screenshots in this README.

Table of Contents

Technologies Used

Architecture

Prerequisites

Installation and Setup

Starting the Services

Frontend Machine Learning Integration

Demo Video


https://github.com/user-attachments/assets/6371ca98-238d-4abb-82c4-c8830b1b3303


Screenshots
![Screenshot (184)](https://github.com/user-attachments/assets/d6084437-d992-4fb5-8978-b25847774547)
![Screenshot (185)](https://github.com/user-attachments/assets/c64e13f9-71c4-4367-a999-086288f3f9c8)
![Screenshot (182)](https://github.com/user-attachments/assets/e3bb4a9b-9a44-437b-a0b9-3b5b733dde3d)
![Screenshot (183)](https://github.com/user-attachments/assets/465daf04-b50e-4846-9b5a-95cc7047c9b8)

Technologies Used

Backend: Node.js, Express.js

Database: MongoDB

Frontend: React.js, Bootstrap

Machine Learning: Python, scikit-learn

API Communication: REST APIs

Architecture

Each service in the microservices architecture communicates with the others using REST APIs. Here are the port allocations:

Prerequisites

Ensure the following software is installed on your system:

Node.js and npm

Postgres PgAdmiv

Python (version 3.8 or higher)

Installation and Setup

Clone the repository:

git clone

Install dependencies for each service:

cd services/UserAuth npm install cd ../UserDetails npm install cd ../Products npm install cd ../Cart npm install cd ../Orders npm install cd ../PaymentGateway npm install

Starting the Services

Each service can be started independently. Run the following commands in separate terminals:

UserAuth:

cd services/UserAuth nodemon start

UserDetails:

cd services/UserDetails nodemon start

Products:

cd services/Products nodemon start

Cart:

cd services/Cart nodemon start

Orders:

cd services/Orders nodemon start

Payment Gateway:

cd services/PaymentGateway nodemon start

Ensure Postgres Aiven Cloud service is running before starting the services.

Frontend Machine Learning Integration

The frontend includes a recommendation system powered by a Python-based machine learning model. To run this:

Navigate to the Machiine_Learning directory:

cd Machiine_Learning

Install the required Python libraries:

pip install -r requirements.txt

Start the machine learning script:

python Postgres_data.py

The terminal will display recommendations based on the provided input.

Demo Video

A demo video showcasing the project is attached here.

Screenshots

Terminal Outputs from Machine Learning Model Screenshot (185) Screenshot (184) Screenshot (183) Screenshot (182)

Sample Input:

Web Application

Homepage:

Product Page:

Notes

The services are loosely coupled, making it easy to scale and maintain.

Docker configuration files are provided to containerize the services for easier deployment.

For any issues, create a GitHub issue or contact the project maintainer.

License

This project is licensed under the MIT License. See the LICENSE file for more details
