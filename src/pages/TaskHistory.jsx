import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const TaskHistory = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>Task History</Heading>
      <VStack spacing={4} align="stretch">
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading as="h2" size="md">Previous Task 1</Heading>
          <Text>Details about the task.</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading as="h2" size="md">Previous Task 2</Heading>
          <Text>Details about the task.</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default TaskHistory;