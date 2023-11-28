const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const users = {};

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username && password && users[username] === password) {
        res.status(200).json({ message: 'Login successful!' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (username && password && !users[username]) {
        users[username] = password;
        res.status(201).json({ message: 'Registration successful!' });
    } else {
        res.status(400).json({ message: 'Username already exists or missing credentials' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// ... (previous code)

// Dummy data for music samples
const musicSamples = [
    { id: 1, title: 'Sample 1', artist: 'Artist A' },
    { id: 2, title: 'Sample 2', artist: 'Artist B' },
    // Add more samples as needed
];

// API endpoint to get music samples
app.get('/samples', (req, res) => {
    res.json(musicSamples);
});

// ... (remaining code)

