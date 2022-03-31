import type { NextPage } from "next";
import AuthenticationLayout from "@/components/Layouts/AuthenticationLayout/AuthenticationLayout";
import {
  Alert,
  AlertIcon,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

const ResetPassword: NextPage = () => {
  return (
    <AuthenticationLayout
      title={"Reset Password"}
      desc={"It’s time to change your password to a new one."}
    >
      <FormControl mb={5}>
        <FormLabel htmlFor="password">New Password</FormLabel>
        <Input size={"lg"} type={"password"} placeholder="" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Confirm New Password</FormLabel>
        <Input size={"lg"} type={"password"} placeholder="" />
      </FormControl>
      <Alert status="error" my={5}>
        <AlertIcon />
        Passwords do not match
      </Alert>
      <Button isFullWidth size={"lg"} variant={"solid"} colorScheme={"teal"}>
        <Text fontWeight={"800"}>Reset Password</Text>
      </Button>
    </AuthenticationLayout>
  );
};

export default ResetPassword;
