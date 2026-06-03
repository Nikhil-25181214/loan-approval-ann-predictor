from flask import Flask, render_template, request, jsonify
from tensorflow.keras.models import load_model
import numpy as np
import joblib

app = Flask(__name__)

model = load_model("loan_model.keras")
scaler = joblib.load("scaler.pkl")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    features = np.array([[
        int(data["Dependents"]),
        float(data["ApplicantIncome"]),
        float(data["CoapplicantIncome"]),
        float(data["LoanAmount"]),
        float(data["Loan_Amount_Term"]),
        int(data["Credit_History"]),
        int(data["Gender_Male"]),
        int(data["Married_Yes"]),
        int(data["Education_Not_Graduate"]),
        int(data["Self_Employed_Yes"]),
        int(data["Property_Area_Semiurban"]),
        int(data["Property_Area_Urban"])
    ]])

    features = scaler.transform(features)

    prediction = model.predict(features)

    probability = float(prediction[0][0])

    if probability > 0.5:
        result = "Loan Approved"
    else:
        result = "Loan Rejected"

    return jsonify({
        "prediction": result,
        "probability": f"{probability*100:.2f}%"
    })

if __name__ == "__main__":
    app.run(debug=True)