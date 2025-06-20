from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)

# Load model
model = joblib.load("model.joblib")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    features = np.array([list(map(float, data.values()))])
    prediction = model.predict(features)
    return jsonify({"predicted_price": float(prediction[0])})
