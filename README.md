# Loan Approval Prediction using Artificial Neural Network (ANN)

## Overview

This project predicts whether a loan application will be approved or rejected using an Artificial Neural Network (ANN) built with TensorFlow and Keras.

The application includes a Flask backend and an interactive web interface built using HTML, CSS, and JavaScript.

---

## Features

* Loan approval prediction
* Probability score for prediction
* Data preprocessing and feature engineering
* Artificial Neural Network (ANN) model
* Flask web application
* Interactive frontend

---

## Technologies Used

* Python
* TensorFlow
* Keras
* Flask
* Scikit-Learn
* Pandas
* NumPy
* HTML
* CSS
* JavaScript

---

## Dataset Features

The model uses the following features:

* Dependents
* Applicant Income
* Coapplicant Income
* Loan Amount
* Loan Amount Term
* Credit History
* Gender
* Married Status
* Education
* Self Employed
* Property Area

---

## Model Architecture

Input Layer

↓

Dense Layer (16 Neurons, ReLU)

↓

Dense Layer (8 Neurons, ReLU)

↓

Output Layer (1 Neuron, Sigmoid)

---

## Model Performance

Test Accuracy: **78.86%**

Loss Function: Binary Cross Entropy

Optimizer: Adam

---

## Project Structure

Loan-Approval-App/

├── app.py

├── loan_model.keras

├── scaler.pkl

├── requirements.txt

├── README.md

├── static/

│ ├── style.css

│ └── script.js

└── templates/

    └── index.html

---

## Installation

Clone the repository:

git clone https://github.com/Nikhil-25181214/loan-approval-ann-predictor.git

Move into the project directory:

cd loan-approval-ann-predictor

Create virtual environment:

python -m venv venv

Activate virtual environment:

Windows:

venv\Scripts\activate

Install dependencies:

pip install -r requirements.txt

Run the application:

python app.py

Open your browser:

http://127.0.0.1:5000

---

## Sample Prediction

Input:

* Applicant Income: 10000
* Coapplicant Income: 5000
* Loan Amount: 120
* Credit History: 1

Output:

Loan Approved

Probability: 85%+

---

## Future Improvements

* Deploy on Render
* Improve UI design
* Add database support
* Add user authentication
* Compare ANN with other ML algorithms

---

## Author

Nikhil Sanga

B.Tech CSE Student

Interested in Artificial Intelligence, Machine Learning, Generative AI, and Full-Stack Development.
