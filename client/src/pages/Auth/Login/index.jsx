import React from 'react'
import {Link} from 'react-router-dom'
import {Center, Box, Button} from '@chakra-ui/react'

function Login() {
  return (
    <div>
      <Center>
        <Box>
          <Link to="/signup"><Button>Don't have an account yet? Sign up</Button></Link>
        </Box>
      </Center>
    </div>
  )
}

export default Login