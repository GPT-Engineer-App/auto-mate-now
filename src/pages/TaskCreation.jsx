import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Select, Textarea, VStack } from "@chakra-ui/react";

const TaskCreation = () => {
  const [automationType, setAutomationType] = useState("");
  const [inputFields, setInputFields] = useState([]);

  const handleAutomationTypeChange = (e) => {
    const selectedType = e.target.value;
    setAutomationType(selectedType);

    // Define input fields based on selected automation type
    let fields = [];
    if (selectedType === "type1") {
      fields = [
        { id: "field1", label: "Field 1", type: "text" },
        { id: "field2", label: "Field 2", type: "text" },
      ];
    } else if (selectedType === "type2") {
      fields = [
        { id: "field3", label: "Field 3", type: "text" },
        { id: "field4", label: "Field 4", type: "text" },
      ];
    }
    setInputFields(fields);
  };

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
        <FormControl id="automation-type">
          <FormLabel>Automation Type</FormLabel>
          <Select placeholder="Select automation type" onChange={handleAutomationTypeChange}>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </Select>
        </FormControl>
        {inputFields.map((field) => (
          <FormControl id={field.id} key={field.id}>
            <FormLabel>{field.label}</FormLabel>
            <Input type={field.type} />
          </FormControl>
        ))}
        <Button colorScheme="teal">Create Task</Button>
      </VStack>
    </Box>
  );
};

export default TaskCreation;