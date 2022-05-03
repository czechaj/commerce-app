import { useQuery } from "react-query";
import React from "react";
import axios from "axios";
import { Grid, GridItem } from "@chakra-ui/react";
import Card from "../../components/Card";
import { getProductList } from "../../api";

function Products() {
  const { isLoading, error, data } = useQuery("products", getProductList);

  if (isLoading) {
    return "Loading";
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
