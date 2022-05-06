import { useQuery } from "react-query";
import React from "react";
import { Center, Grid, Spinner } from "@chakra-ui/react";
import Card from "../../components/Card";
import { getProductList } from "../../api";

function Products() {
  const { isLoading, error, data } = useQuery("products", getProductList);

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
      <Grid m={20} templateColumns="repeat(4, 1fr)" gap={1}>
        {data.map((item, key) => (
          <Card item={item} key={key} />
        ))}
      </Grid>
    </div>
  );
}
export default Products;
