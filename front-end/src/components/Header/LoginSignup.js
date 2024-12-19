import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  CloseButton,
  Input,
  Flex,
  VStack,
  Link,
  Checkbox,
} from "@chakra-ui/react";

const LoginSignup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <Flex direction="column" align="start">
      {/* Button to Open the Popup */}
      <Button colorScheme="gray" onClick={togglePopup}>
        Login / Signup
      </Button>

      {/* Popup Screen */}
      {isPopupOpen && (
        <Box
          position="fixed"
          top="50%"
          left="50%"
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
          <VStack spacing={4} align="stretch">
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Login / Sign up
            </Text>
            <Text fontSize="sm" color="gray.600">
              Using OTP
            </Text>

            {/* Input Fields */}
            <Input
              placeholder="Enter Phone number / Email Id"
              type="text"
              focusBorderColor="green.400"
            />
            <Button colorScheme="green" width="full">
              Continue
            </Button>

            {/* Terms and Conditions */}
            <Text fontSize="xs" color="gray.500" textAlign="center">
              By continuing, I accept TCP - bigbasket’s{" "}
              <Link color="green.400" href="#">
                Terms and Conditions
              </Link>{" "}
              &{" "}
              <Link color="green.400" href="#">
                Privacy Policy
              </Link>
            </Text>

            {/* reCAPTCHA Notice */}
            <Text fontSize="xs" color="gray.500" textAlign="center">
              This site is protected by reCAPTCHA and the Google -{" "}
              <Link color="green.400" href="#">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link color="green.400" href="#">
                Terms of Service
              </Link>{" "}
              apply.
            </Text>
          </VStack>
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

export default LoginSignup;
