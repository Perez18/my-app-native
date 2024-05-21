import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required('Email is required'),
    password: yup
        .string()
        .min(5, 'Too Shoort')
        .max(1000, 'Too Long')
        .required('Password is requerid')
});