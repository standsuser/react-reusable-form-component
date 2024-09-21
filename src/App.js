import React from 'react';
import ReusableForm from './ReusableForm';
import * as yup from 'yup';


const App = () => {
    // Define validation schema using Yup
    const validationSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        age: yup.number().min(18, 'You must be at least 18 years old').required('Age is required'),
        color: yup.string().required('Color is required'),
        gender: yup.string().required('Gender is required'),
        terms: yup.boolean().oneOf([true], 'You must accept the terms'),
        file: yup.mixed().required('File is required'),
    });

    // Define the form fields
    const fields = [
        { name: 'name', type: 'text', label: 'Name', grid: { xs: 12, md: 6 } },
        { name: 'email', type: 'text', label: 'Email', grid: { xs: 12, md: 6 } },
        { name: 'password', type: 'password', label: 'Password', grid: { xs: 12, md: 6 } },
        { name: 'age', type: 'slider', label: 'Age', min: 18, max: 100, step: 1, grid: { xs: 12, md: 6 } },
        { name: 'color', type: 'color', label: 'Favorite Color', grid: { xs: 12, md: 6 } },
        { name: 'gender', type: 'radio', label: 'Gender', options: [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }], grid: { xs: 12, md: 6 } },
        { name: 'terms', type: 'checkbox', label: 'Accept Terms', grid: { xs: 12, md: 6 } },
        { name: 'file', type: 'file', label: 'Upload Resume', grid: { xs: 12, md: 6 } },
    ];

// Handle form submission
const onSubmit = (data) => {
  console.log('Form Data:', data);
  fetch('http://localhost:5050/data', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  .then((response) => {
      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then((data) => {
      console.log('Success:', data);
  })
  .catch((error) => {
      console.error('Error:', error);
  });
};



    return (
        <div style={{ padding: '20px' }}>
            <h1>Reusable Form Example</h1>
            <ReusableForm
                fields={fields}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            />
        </div>
    );
};

export default App;