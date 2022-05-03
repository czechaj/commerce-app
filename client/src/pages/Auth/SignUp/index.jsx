import React from "react";
import { useFormik } from "formik";
import { signUserUp } from "../../../api";
import {
  Center,
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
import validationSchema from "./validation";

function SignUp() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        const registerRes = await signUserUp({
          password: values.password,
          email: values.email,
        });
        console.log(registerRes);
      } catch (error) {
        bag.setErrors({ error: error.response.data.message });
      }
    },
  });

  return (
    <div>
      <Flex justify={"center"}>
       <Box pt={10}> <Box>
          <Heading my={10}>Sign Up</Heading>
        </Box>

        <Box maxWidth={"300px"} textAlign={"center"} >
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
            <FormControl>
              <FormLabel htmlFor="passwordConfirm">
                Please confirm your password
              </FormLabel>
              <Input
                variant={"filled"}
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.passwordConfirm}
                onBlur={formik.onBlur}
              />
              {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
                <Text fontWeight={"bold"} fontSize={"sm"} color={"red.500"}>
                  {" "}
                  {formik.errors.passwordConfirm}{" "}
                </Text>
              )}
            </FormControl>
            <Button mt={4} colorScheme={"teal"} type="submit">
              Submit
            </Button>
          </form>
        </Box></Box>
      </Flex>
    </div>
  );
}

export default SignUp;
