import { Center, Heading, Button, Image, Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
function Home() {
  return (
    <div>
      <Center mt={10}>
        <Box>
          <Heading>Welcome to</Heading>
          <Image src={Logo} />
          <Link to="products">
            <Button colorScheme={"teal"} variant={"outline"}>
              View products
            </Button>
          </Link>
        </Box>
      </Center>
    </div>
  );
}

export default Home;
