import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useBox } from "../../context/BoxContext";
import {
  useDisclosure,
  Button,
  TableContainer,
  Table,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Thead,
  Tbody,
  Tr,
  FormControl,
  FormLabel,
  Input,
  Stat,
  StatLabel,
  StatNumber,
  Td,
  Select,
  Th,
  Alert,
} from "@chakra-ui/react";
import { postOrder } from "../../api";

function Box() {
  const { items, removeItem, emptyBox } = useBox();
  const totalPrice = items.reduce((acc, obj) => acc + obj.price, 0).toFixed(2);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const [address, setAdress] = useState("");

  const handleSubmit = async () => {
    const itemIds = items.map((item) => item._id);
    const input = {
      address,
      items: JSON.stringify(itemIds),
    };
    const res = await postOrder(input);
    onClose();
    emptyBox();
  };

  return (
    <div>
      <TableContainer mx={"15%"}>
        {items.length === 0 ? (
          <Alert mt={10} status="error">
            {" "}
            <Link to="/products">
              Your box is empty. Let's start shopping
            </Link>{" "}
          </Alert>
        ) : (
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
        )}

        {totalPrice > 0 && (
          <div style={{ float: "right" }}>
            <Stat mt={6}>
              <StatLabel>Total Price</StatLabel>
              <StatNumber>${totalPrice} </StatNumber>
            </Stat>

            <Button my={5} mr={2} onClick={onOpen}>
              Complete Order
            </Button>
            <Modal
              initialFocusRef={initialRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Complete your order</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Address</FormLabel>
                    <Input
                      ref={initialRef}
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAdress(e.target.value)}
                    />
                  </FormControl>
                  <FormControl mt={3}>
                    <FormLabel>Payment method</FormLabel>
                    <Select>
                      <option value="">Payment on delivery</option>
                    </Select>
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={handleSubmit} colorScheme="blue" mr={3}>
                    Order
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        )}
      </TableContainer>
      <div style={{ height: "20vh" }}></div>
    </div>
  );
}

export default Box;
