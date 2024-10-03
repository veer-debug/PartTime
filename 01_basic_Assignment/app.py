from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

@app.route('/')
def index():
    df = pd.read_csv('./Smart_Phone.csv')
    image_data = df[['Name', 'Image Link']].head(12)

    # Create a list of dictionaries containing 'url' and 'text' for each image
    images = [{"url": row['Image Link'], "text": row['Name']} for _, row in image_data.iterrows()]

    additional_text = "Thank you for viewing our smartphone gallery!"

    # Pass the list and additional text to the template
    return render_template('index.html', images=images, additional_text=additional_text)

if __name__ == '__main__':
    app.run(debug=True)
