import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email field can't be left blank")
    .string(),
  password: yup
    .string()
    .min(5, "Your password must be at least 5 characters")
    .required("Password field can't be left blank"),

  passwordConfirm: yup
    .string()
    .oneOf([yup.ref.password], "Passwords do not match")
    .required("Confirmation field can't be left blank"),
});


export default validation