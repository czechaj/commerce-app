import React from "react";
import { useQuery } from "react-query";
import {
  Alert,
  Text,
  Center,
  Spinner,
  Button,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
} from "@chakra-ui/react";
import { getOrderList } from "../../../api";

function Orders() {
  const { isLoading, error, data } = useQuery("admin:orders", getOrderList);

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
    return <Alert status={"error"}>An error has occurred</Alert>;
  }

  return (
    <div style={{ marginTop: "5vh" }}>
      <Text fontSize={24} fontWeight={"bold"}>
        {" "}
        Orders{" "}
      </Text>

      <TableContainer mx={"15%"} mt={6}>
        <Table colorScheme={"blackAlpha"} variant="striped">
          <Thead>
            <Tr>
              <Th>User</Th>
              <Th>Item Id's</Th>
              <Th>Address</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map((item, key) => (
                <Tr key={key}>
                  <Td>{item.user.email}</Td>
                  <Td>
                    {" "}
                    <ol>
                      {item.items.map((i, id) => (
                        <li key={id}>{i._id}</li>
                      ))}{" "}
                    </ol>
                  </Td>
                  <Td> {item.adress}</Td>
                  <Td> {item.createdAt}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Orders;
