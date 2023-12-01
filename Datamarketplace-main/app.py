from flask import Flask, render_template, request, jsonify
import pandas as pd
from statsmodels.stats.outliers_influence import variance_inflation_factor
from test import calculate_vif, calculate_price

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/', methods=['POST'])
def predict():
    try:
        # Get the uploaded file from the request
        uploaded_file = request.files['file']

        # Read the CSV file into a pandas DataFrame
        df = pd.read_csv(uploaded_file)

        # Calculate VIF
        vif = calculate_vif(df.iloc[:, :-1])

        # Calculate predicted price
        price_prediction = calculate_price(df, vif)

        # Return the prediction as JSON
        return jsonify({'prediction': price_prediction})
    except Exception as e:
        # Handle any errors that might occur
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
