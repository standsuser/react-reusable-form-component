import * as yup from 'yup';

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

export default validationSchema;
