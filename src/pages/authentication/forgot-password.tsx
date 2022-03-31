import type { NextPage } from "next";
import AuthenticationLayout from "@/components/Layouts/AuthenticationLayout/AuthenticationLayout";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";

const ForgotPassword: NextPage = () => {
  return (
    <AuthenticationLayout
      title={"Forgot Password"}
      desc={
        "Don’t worry. We will send you a password reset link right away. Check your mailbox and click on the reset link to get a new password."
      }
    >
      <FormControl mb={5}>
        <FormLabel htmlFor="userName">Enter Your Email</FormLabel>
        <Input size={"lg"} id="userName" placeholder="" />
      </FormControl>

      <Button isFullWidth size={"lg"} variant={"solid"} colorScheme={"teal"}>
        <Text fontWeight={"800"}>Send Password Reset Link</Text>
      </Button>
      <Box pt={5} d={"flex"} justifyContent={"center"}>
        <Link href="./login">Back to Login</Link>
      </Box>
    </AuthenticationLayout>
  );
};

export default ForgotPassword;
