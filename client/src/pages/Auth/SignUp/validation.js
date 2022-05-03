import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email field can't be left blank"),
  password: yup
    .string()
    .required("Password field can't be left blank")
    .min(5, "Your password must be at least 5 characters"),

  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirmation field can't be left blank"),
});

export default validations;
