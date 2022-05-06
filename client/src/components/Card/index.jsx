import React from "react";
import { Box, Center, Text, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useBox } from "../../context/BoxContext";

function Card({ item }) {
  const { items, addItem } = useBox();
  const itemInBasket = items.find((i) => i._id === item._id);

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
          <Button
            colorScheme={itemInBasket ? "red" : "teal"}
            variant={"outline"}
            mt={5}
            onClick={() => {
              addItem(item, itemInBasket);
            }}
          >
            {itemInBasket ? "Remove from box" : "Add to box"}
          </Button>
        </Link>
      </Box>
    </div>
  );
}

export default Card;
