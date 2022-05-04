import { Box, Code } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../context/AuthContext";

function Profile() {
  const { user } = useAuth();
  return (
    <div>
      {user && (
        <>
          <Box>
            {" "}
            Email: <Code>{user.email}</Code>{" "}
          </Box>
          <Box>
            {" "}
            Role: <Code>{user.role}</Code>
          </Box>
          {/*   <code>{JSON.stringify(user)}</code> */}
        </>
      )}
    </div>
  );
}

export default Profile;
