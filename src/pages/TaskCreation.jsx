import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack } from "@chakra-ui/react";

const TaskCreation = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl id="task-name">
          <FormLabel>Task Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="task-details">
          <FormLabel>Task Details</FormLabel>
          <Textarea />
        </FormControl>
        <Button colorScheme="teal">Create Task</Button>
      </VStack>
    </Box>
  );
};

export default TaskCreation;