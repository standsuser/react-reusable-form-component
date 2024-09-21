# Reusable Form Component with File Upload

## Description

This project showcases a reusable form component built with React, featuring various input types, validation using Yup, and the ability to upload files. The form collects user data such as name, email, password, age, favorite color, gender, and terms acceptance. Submitted data, along with the uploaded file, is saved in a JSON file on the server.

## Features

- **Reusable Form**: Easily adaptable form component for different input types.
- **Validation**: Form validation using Yup for ensuring data integrity.
- **File Upload**: Allows users to upload files, which are saved to the server.
- **Data Storage**: User data is stored in a JSON file on the server, maintaining a record of submissions.
- **Cross-Origin Resource Sharing (CORS)**: Configured to handle cross-origin requests.

## Technologies Used

- **Frontend**: React, Yup
- **Backend**: Node.js, Express, Multer for file uploads, CORS for handling cross-origin requests
- **Data Storage**: JSON files for storing submitted data

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/repo-name.git
   cd repo-name
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node server.js
   ```

   The server will run on `http://localhost:5050`.

4. In a separate terminal, navigate to the React app directory (if applicable) and run:

   ```bash
   npm start
   ```

   The app will open in your browser at `http://localhost:3000`.

### Usage

Fill out the form fields and upload a file. On submission, the form data will be logged in the console and saved to a JSON file on the server.
