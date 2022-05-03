import React from "react";
import { Box, Center, Text, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div>
      <Box
        p={6}
        m={4}
        borderWidth={"1px"}
        borderRadius={"lg"}
        overflow="hidden"
        maxH={380}
      >
        <Link to={`/products/${item._id}`}>
          <Center>
            <Image src={item.image} loading={"lazy"} maxH={180} />
          </Center>
          <Box display={"flex"} justifyContent={"space-between"} mt={7}>
            <Text>{item.title} </Text>
            <Text fontWeight={"bold"}>{item.price}₺</Text>
          </Box>
        </Link>

        <Link to="#">
          <Button colorScheme={"teal"} variant={"outline"} mt={5}>
            Add to basket
          </Button>
        </Link>
      </Box>
    </div>
  );
}

export default Card;
