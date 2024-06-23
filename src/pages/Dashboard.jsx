import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>Dashboard</Heading>
      <VStack spacing={4} align="stretch">
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading as="h2" size="md">Task Status</Heading>
          <Text>Overview of current tasks and their statuses.</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading as="h2" size="md">Task History</Heading>
          <Text>List of previously executed tasks.</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading as="h2" size="md">Real-time Notifications</Heading>
          <Text>Notifications about task completions and updates.</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Dashboard;