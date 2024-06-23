import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Select, VStack } from "@chakra-ui/react";

const TaskCreation = () => {
  const [automationType, setAutomationType] = useState("");
  const [inputFields, setInputFields] = useState([]);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(null);

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

  const handleAddStep = () => {
    if (currentStep) {
      setSteps([...steps, currentStep]);
      setCurrentStep(null);
    }
  };

  const handleExecuteAutomation = () => {
    // Logic to execute automation
    console.log("Executing automation with steps:", steps);
  };

  const handleSaveTemplate = () => {
    // Logic to save as template
    console.log("Saving as template with steps:", steps);
  };

  const handleSaveExecutable = () => {
    // Logic to save as executable automation app
    console.log("Saving as executable automation app with steps:", steps);
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl id="browserCatApiKey">
          <FormLabel>BrowserCat API Key</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="automationName">
          <FormLabel>Automation Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="automation-method">
          <FormLabel>Automation Method</FormLabel>
          <Select placeholder="Select method" onChange={handleAutomationTypeChange}>
            <option value="askAI">Ask AI</option>
            <option value="manual">Manual Steps</option>
          </Select>
        </FormControl>
        {automationType === "manual" && (
          <>
            <FormControl id="manual-steps">
              <FormLabel>Manual Steps</FormLabel>
              <Select placeholder="Select command" onChange={(e) => setCurrentStep(e.target.value)}>
                <option value="url">URL</option>
                <option value="click">Click</option>
                <option value="upload">Upload</option>
                <option value="download">Download</option>
                <option value="select">Select</option>
                <option value="textInput">Text Input</option>
              </Select>
            </FormControl>
            {currentStep && (
              <FormControl id="step-input">
                <FormLabel>Input for {currentStep}</FormLabel>
                <Input type="text" />
                <Button onClick={handleAddStep}>Next Step</Button>
              </FormControl>
            )}
          </>
        )}
        <Button colorScheme="teal" onClick={handleExecuteAutomation}>Execute Automation</Button>
        <Button colorScheme="blue" onClick={handleSaveTemplate}>Save as Template</Button>
        <Button colorScheme="green" onClick={handleSaveExecutable}>Save as Executable</Button>
      </VStack>
    </Box>
  );
};

export default TaskCreation;