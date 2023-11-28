from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# Dummy data for music samples
music_samples = [
    {"id": 1, "title": "Sample 1", "artist": "Artist A"},
    {"id": 2, "title": "Sample 2", "artist": "Artist B"},
    # Add more samples as needed
]

@app.route("/api/samples", methods=["GET"])
def get_samples():
    return jsonify(music_samples)

if __name__ == "__main__":
    app.run(debug=True)

