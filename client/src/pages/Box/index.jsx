import React from "react";
import { Link } from "react-router-dom";
import { useBox } from "../../context/BoxContext";
import {
  Button,
  TableContainer,
  Table,
  Image,
  Thead,
  Tbody,
  Tr,
  Stat,
  StatLabel,
  StatNumber,
  Td,
  Th,
} from "@chakra-ui/react";

function Box() {
  const { items, removeItem } = useBox();
  const totalPrice = items.reduce((acc, obj) => acc + obj.price, 0);
  return (
    <div>
      <TableContainer mx={"15%"}>
        <Table colorScheme={"blackAlpha"} variant="striped">
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Price</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items &&
              items.map((item, key) => (
                <Tr h={"40"} key={key}>
                  <Td>
                    <Link to={`/products/${item._id}`}>
                      <div style={{ display: "flex" }}>
                        <Image
                          src={item.image}
                          h={"20vh"}
                          minW={"24"}
                          w={"10vw"}
                          mr={5}
                        />
                        <span> {JSON.stringify(item.title)}</span>
                      </div>
                    </Link>
                  </Td>

                  <Td width={"10"}> ${JSON.stringify(item.price)}</Td>
                  <Td>
                    <Button
                      colorScheme={"red"}
                      variant={"outline"}
                      type={"button"}
                      onClick={() => {
                        removeItem(item._id);
                      }}
                    >
                      Remove from box
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
        {totalPrice > 0 && (
          <Stat mt={6} textAlign={"end"}>
            <StatLabel>Total Price</StatLabel>
            <StatNumber>${totalPrice} </StatNumber>
          </Stat>
        )}
      </TableContainer>
    </div>
  );
}

export default Box;
