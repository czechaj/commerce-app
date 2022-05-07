import React from "react";
import { useInfiniteQuery } from "react-query";
import { Center, Box, Alert, Grid, Spinner, Button } from "@chakra-ui/react";
import { getProductList } from "../../api";
import Card from "../../components/Card";

function Products() {
  const {
    data,
    fetchNextPage,
    error,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("products", getProductList, {
    getNextPageParam: (lastGroup, allGroups) => {
      const morePagesExist = lastGroup && lastGroup.length === 8;
      if (!morePagesExist) {
        return;
      }
      return allGroups.length + 1;
    },
  });

  return status === "loading" ? (
    <Center mt={100}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Center>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <div>
      <Box>
        {data.pages.map((items, key) => (
          <Grid
            marginTop={20}
            marginBottom={10}
            templateColumns="repeat(4, 1fr)"
            gap={1}
            key={key}
          >
            {items.map((item, id) => (
              <Card item={item} key={id} />
            ))}
          </Grid>
        ))}
      </Box>

      <div>
        <Button
          mb={55}
          onClick={() => fetchNextPage()}
          isLoading={isFetching}
          disabled={!hasNextPage || isFetchingNextPage}
          colorScheme={"teal"}
          variant={"ghost"}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </Button>
      </div>
    </div>
  );
}
export default Products;
