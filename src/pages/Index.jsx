import { Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the AI-powered Automation App</Text>
        <Text>Navigate through the app using the links above to create and manage your tasks.</Text>
      </VStack>
    </Container>
  );
};

export default Index;