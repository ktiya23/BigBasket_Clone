import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  CloseButton,
  Flex,
  Input,
} from "@chakra-ui/react";

const LocationSelector = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <Flex direction="column" align="start">
      {/* Button to Open the Popup */}
      <Button colorScheme="gray" onClick={togglePopup}>
        Select Location
      </Button>

      {/* Popup Screen */}
      {isPopupOpen && (
        <Box
          position="fixed"
          top="20%"
          left="70%"
          transform="translate(-50%, -50%)"
          bg="white"
          p={6}
          borderRadius="md"
          boxShadow="lg"
          zIndex="10"
          width={["90%", "400px"]}
        >
          {/* Close Button */}
          <CloseButton
            position="absolute"
            top="10px"
            right="10px"
            onClick={togglePopup}
          />

          {/* Popup Content */}
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Select a location for delivery
          </Text>
          <Text fontSize="sm" color="gray.600">
            Choose your address location to see product availability and delivery
            options.
          </Text>
          <Input placeholder="Search for area"></Input>
        </Box>
      )}

      {/* Overlay Background */}
      {isPopupOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="blackAlpha.300"
          zIndex="5"
          onClick={togglePopup} // Close popup when clicking outside
        />
      )}
    </Flex>
  );
};

export default LocationSelector;
