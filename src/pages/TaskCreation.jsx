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
    if (selectedType === "browserConnection") {
      fields = [
        { id: "browserCatApiKey", label: "BrowserCat API Key", type: "text" },
      ];
    } else if (selectedType === "loginDetails") {
      fields = [
        { id: "loginUrl", label: "URL of the login page", type: "text" },
        { id: "username", label: "Username", type: "text" },
        { id: "password", label: "Password", type: "password" },
      ];
    } else if (selectedType === "navigationAndActions") {
      fields = [
        { id: "postLoginUrl", label: "URL to navigate after login", type: "text" },
        { id: "buttonSelectors", label: "Button selectors (comma-separated)", type: "text" },
        { id: "inputSelectorsAndValues", label: "Input selectors and values (comma-separated)", type: "text" },
        { id: "confirmationSteps", label: "Confirmation steps (comma-separated)", type: "text" },
      ];
    } else if (selectedType === "finalConfirmation") {
      fields = [
        { id: "successMessageSelector", label: "Success message selector", type: "text" },
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
            <option value="browserConnection">Browser Connection</option>
            <option value="loginDetails">Login Details</option>
            <option value="navigationAndActions">Navigation and Actions</option>
            <option value="finalConfirmation">Final Confirmation</option>
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