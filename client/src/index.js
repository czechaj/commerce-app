import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import App from "./App";
// import "antd/dist/antd.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false /* Don't refetch on page changes */,
      refetchOnWindowFocus: false /* Don't refetch on tab changes */,
    },
  },
});

root.render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ChakraProvider>
        <BrowserRouter>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
      </ChakraProvider>
    </AuthProvider>
  </QueryClientProvider>
);
