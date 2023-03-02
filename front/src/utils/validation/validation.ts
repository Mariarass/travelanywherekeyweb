import * as yup from "yup"

export const validationSchema = yup.object({
    firstName: yup.string()
        .min(2, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
    email: yup.string()
        .required("Email is required")
        .email("Enter a valid email"),
    phone: yup.number().min(5, 'Too Short').required('Required')

});