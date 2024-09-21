const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5050;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // For parsing application/json

// Define the path to save the JSON file
const filePath = path.join(__dirname, 'data.json');

// POST endpoint to save data
app.post('/data', (req, res) => {
    const data = req.body;

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // If the file doesn't exist, create it
            fs.writeFile(filePath, JSON.stringify([], null, 2), (err) => {
                if (err) {
                    console.error('Error creating file:', err);
                    return res.status(500).send('Error creating file');
                }
                // Now call the function to save the data
                saveData(data, res);
            });
        } else {
            // If the file exists, just save the data
            saveData(data, res);
        }
    });
});

// Function to save data
const saveData = (data, res) => {
    fs.readFile(filePath, 'utf8', (err, jsonData) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Error reading file');
        }

        // Parse existing data or initialize as empty array
        const existingData = jsonData ? JSON.parse(jsonData) : [];

        // Append new data
        existingData.push(data);

        // Write back to the JSON file
        fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).send('Error writing file');
            }

            res.status(200).json({ message: 'Data saved successfully!' });
        });
    });
};

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
