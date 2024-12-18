import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Logo from "./Logo";
import LocationSelector from "./LocationSelector";
import LoginSignup from "./LoginSignup"
function Header() {
  return (
    <Flex
      as="header"
      bg="gray.100"
      p={4}
      align="center"
      justify="space-between"
      width="100%"
      boxShadow="md"
    >
      {/* Logo Section */}
      <Box>
        <Logo />
      </Box>

      {/* Location Selector */}
      <Box>
        <LocationSelector />
      </Box>
      <Box>
        <LoginSignup />
      </Box>
    </Flex>
  );
}

export default Header;
