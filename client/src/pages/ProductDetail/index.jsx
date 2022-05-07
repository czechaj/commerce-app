import React from "react";
import {
  Box,
  Text,
  Image,
  Center,
  Heading,
  Button,
  Alert,
  Spinner,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../api";
import { useBox } from "../../context/BoxContext";

function Product() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(["products", id], () =>
    getProductDetail(id)
  );
  const { warning, items, addItem } = useBox();
  const itemInBasket = items.find((item) => item._id === id);

  if (isLoading) {
    return (
      <Center mt={100}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }

  if (error) {
    return "An error has occurred";
  }

  return (
    <div>
      <Center>
        <Box mt={8}>
          <Heading>{data.title}</Heading>
          <Center>
            <Image mt={7} src={data.image} align="center" maxH={500} />
          </Center>

          <Text padding={5} border={"1px"} borderRadius={30} mt={5} mx={20}>
            {data.description}
          </Text>
          <Box
            mt={20}
            mx={20}
            display={"plex"}
            justifyContent={"end"}
            alignItems={"center"}
          >
            <Text fontSize={12} fontWeight={"bold"}>
              {" "}
              ${data.price}{" "}
            </Text>
            <Button
              ml={5}
              colorScheme={itemInBasket ? "red" : "teal"}
              value={data._id}
              onClick={() => {
                addItem(data, itemInBasket);
              }}
            >
              {itemInBasket ? "Remove from box" : "Add to box!"}
            </Button>
          </Box>
        </Box>
      </Center>
      <Box h={100}></Box>
    </div>
  );
}

export default Product;
