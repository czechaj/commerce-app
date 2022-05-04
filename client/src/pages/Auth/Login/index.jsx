import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../../context/AuthContext";
import {
  Box,
  Heading,
  Input,
  FormLabel,
  FormControl,
  Button,
  Text,
  Flex,
  Alert,
} from "@chakra-ui/react";
import validations from "./validation";
import { signUserIn } from "../../../api";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validations,
    onSubmit: async (values, bag) => {
      try {
        const registerRes = await signUserIn({
          password: values.password,
          email: values.email,
        });
        console.log(registerRes);
        login(registerRes);
        navigate("/profile");
      } catch (e) {
        console.log(e);
        bag.setErrors({ error: e.response.data.message });
      }
    },
  });

  return (
    <div>
      <Flex justify={"center"}>
        <Box pt={10}>
          {" "}
          <Box>
            <Heading my={10}>Login</Heading>
          </Box>
          <Box maxWidth={"300px"} textAlign={"center"}>
            {formik.errors.error && (
              <Alert status="error">{formik.errors.error}</Alert>
            )}
          </Box>
          <Box my={5}>
            <form onSubmit={formik.handleSubmit} style={{ width: "300px" }}>
              <FormControl>
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <Input
                  variant={"filled"}
                  id="email"
                  name="email"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.onBlur}
                />
                {formik.errors.email && (
                  <Text fontWeight={"bold"} fontSize={"sm"} color={"red.500"}>
                    {" "}
                    {formik.errors.email}{" "}
                  </Text>
                )}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  variant={"filled"}
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.onBlur}
                />
                {formik.touched.password && formik.errors.password && (
                  <Text fontWeight={"bold"} fontSize={"sm"} color={"red.500"}>
                    {" "}
                    {formik.errors.password}{" "}
                  </Text>
                )}
              </FormControl>

              <Button mt={4} colorScheme={"teal"} type="submit">
                Login
              </Button>
            </form>
          </Box>
          <Link to="/signup">
            <Text fontWeight={"bold"} fontSize={11} >Don't have an account yet? Sign up</Text>
          </Link>
        </Box>
      </Flex>
    </div>
  );
}

export default Login;
