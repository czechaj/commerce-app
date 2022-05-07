import React from "react";
import { getProductList, deleteProduct } from "../../../api";
import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  Alert,
  Text,
  ButtonGroup,
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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Products() {
  const { isLoading, error, data } = useQuery("admin:products", getProductList);
  const deleteMutation = useMutation(deleteProduct);
  const queryClient = useQueryClient();

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
        Products{" "}
      </Text>
      <TableContainer mx={"15%"} mt={6}>
        <Table colorScheme={"blackAlpha"} variant="striped">
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Price</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map((item, key) => (
                <Tr key={key}>
                  <Td>
                    <Link to={`/products/${item._id}`}>
                      <div style={{ display: "flex" }}>
                        <span> {JSON.stringify(item.title)}</span>
                      </div>
                    </Link>
                  </Td>

                  <Td width={"10"}> ${JSON.stringify(item.price)}</Td>
                  <Td>
                    <Popover placement="right" closeOnBlur={false}>
                      {({ isOpen, onClose }) => (
                        <>
                          <PopoverTrigger>
                            <Button
                              colorScheme={"red"}
                              variant={"outline"}
                              type={"button"}
                            >
                              Remove from box
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            color="white"
                            bg={"blackAlpha.800"}
                            borderColor="blue.800"
                          >
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody marginTop={5}>
                              This is irreversible. Are you sure ?
                            </PopoverBody>
                            <PopoverFooter
                              border="0"
                              d="flex"
                              alignItems="center"
                              justifyContent="space-between"
                              pb={4}
                            >
                              <ButtonGroup size="sm">
                                <Button
                                  colorScheme="red"
                                  onClick={() => {
                                    deleteMutation.mutate(item._id, {
                                      onSuccess: () => {
                                        queryClient.invalidateQueries(
                                          "admin:products"
                                        );
                                      },
                                    });
                                    onClose();
                                  }}
                                >
                                  Delete Product
                                </Button>
                                <Button colorScheme="blue" onClick={onClose}>
                                  Cancel
                                </Button>
                              </ButtonGroup>
                            </PopoverFooter>
                          </PopoverContent>
                        </>
                      )}
                    </Popover>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Products;
