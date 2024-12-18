import { Flex, Image, Input, Box } from "@chakra-ui/react";
import React from "react";
import logo from "../../assests/images/logo.png";

const Logo = () => {
  return (
    <Flex align="center" gap={4}>
      {/* BigBasket Logo */}
      <Image src={logo} alt="BigBasket Logo" height="50px" width="150px" />

      {/* Search Bar */}
      <Box flex="1">
        <Input
          placeholder="Search for Products..."
          bg="white"
          borderColor="gray.300"
          borderRadius="md"
        />
      </Box>
    </Flex>
  );
};

export default Logo;
