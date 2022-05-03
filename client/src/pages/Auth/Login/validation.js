import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email field can't be left blank"),
  password: yup
    .string()
    .min(5, "Your password must be at least 5 characters")
    .required("Password field can't be left blank"),
});

export default validations;