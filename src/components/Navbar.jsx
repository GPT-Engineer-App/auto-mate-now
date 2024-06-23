import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-around">
        <Link as={NavLink} to="/" color="white" _hover={{ textDecoration: "none" }}>Home</Link>
        <Link as={NavLink} to="/dashboard" color="white" _hover={{ textDecoration: "none" }}>Dashboard</Link>
        <Link as={NavLink} to="/task-creation" color="white" _hover={{ textDecoration: "none" }}>Create Task</Link>
        <Link as={NavLink} to="/task-history" color="white" _hover={{ textDecoration: "none" }}>Task History</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;