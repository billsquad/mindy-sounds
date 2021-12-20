import { useState } from "react";
import { Box, Flex, Input, Button, Text } from "@chakra-ui/react";
import { Center } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import NextImage from "next/image";
import { signinAuth, signupAuth } from "../lib/mutations";

type AuthFormProps = {
  mode: "signin" | "signup";
  // eslint-disable-next-line react/require-default-props
  isSignin?: boolean;
};

const AuthForm = ({ mode = "signin", isSignin = false }: AuthFormProps) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (isSignin) {
      await signinAuth(mode as "signin", { email, password });
      setIsLoading(false);
      router.push("/");
    }

    await signupAuth(mode as "signup", { username, email, password });
    setIsLoading(false);
    router.push("/signin");
  };

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="1px solid white"
      >
        <NextImage src="/logo.svg" height={60} width={120} />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="50px" bg="gray.900" borderRadius="6px">
          <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            {isSignin ? (
              <>
                <Input
                  placeholder="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </>
            ) : (
              <>
                <Input
                  placeholder="username"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                  placeholder="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </>
            )}
            <Button
              type="submit"
              bg="green.500"
              isLoading={isLoading}
              sx={{
                "&:hover": {
                  bg: "green.300",
                },
              }}
            >
              {mode}
            </Button>
          </form>
          <Center>
            <Text>
              Test Credentials: email: user@test.com password: password
            </Text>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
