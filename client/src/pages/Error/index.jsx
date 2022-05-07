import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";
function index() {
  return (
    <div>
      <Alert status="error" w={"75vw"} mx={"auto"} my={"10"}>
        <AlertIcon />
        Error(404): Page was not found
      </Alert>
    </div>
  );
}

export default index;
