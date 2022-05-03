import React from "react";
import { Box, Text, Image, Center, Heading, Button } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../api";

function Product() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(["products", id], () =>
    getProductDetail(id)
  );

  if (isLoading) {
    return "Loading";
  }

  if (error) {
    return "An error has occurred";
  }

  console.log(data);

  return (
    <div>
      <Center>
        <Box mt={8}>
          <Heading>{data.title}</Heading>
          <Center>
            <Image mt={7} src={data.image} align="center" maxH={500} />
          </Center>

          <Text mt={5} mx={20}>
            {data.description}
          </Text>
          <Box
            mt={20}
            mx={20}
            display={"plex"}
            justifyContent={"space-between"}
          >
            <Text fontSize={12} fontWeight={"bold"}>
              {" "}
              ${data.price}{" "}
            </Text>
            <Button colorScheme={"teal"}>Add to basket!</Button>
          </Box>
        </Box>
      </Center>
      <Box h={100}></Box>
    </div>
  );
}

export default Product;
