import { useState } from "react";
import type { NextPage } from "next";
import AuthenticationLayout from "@/components/Layouts/AuthenticationLayout/AuthenticationLayout";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Link,
} from "@chakra-ui/react";

const Login: NextPage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <AuthenticationLayout
      title={"Welcome Back"}
      desc={"Please login to get started"}
    >
      <FormControl mb={5}>
        <FormLabel htmlFor="userName">Username</FormLabel>
        <Input size={"lg"} id="userName" placeholder="" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            size={"lg"}
            type={show ? "text" : "password"}
            placeholder=""
          />
          <InputRightElement width="4.5rem">
            <Button mt={2} h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Box py={5} d={"flex"} justifyContent={"flex-end"}>
        <Link href="./forgot-password">Forgot Password?</Link>
      </Box>
      <Button isFullWidth size={"lg"} variant={"solid"} colorScheme={"teal"}>
        <Text fontWeight={"800"}>Login</Text>
      </Button>
    </AuthenticationLayout>
  );
};

export default Login;
