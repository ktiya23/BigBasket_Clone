import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    Text,
    Box,
  } from "@chakra-ui/react";

const LoginSignup = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">Login/Sign up</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box textAlign="center" mb={4}>
            <Text fontWeight="bold">Using OTP</Text>
          </Box>
          <Input placeholder="Enter Phone number/Email ID" mb={4} />
          <Button colorScheme="green" w="100%">
            Continue
          </Button>
          <Text fontSize="xs" color="gray.600" mt={4}>
            By continuing, I accept BigBasket’s{" "}
            <Text as="span" color="blue.500">
              Terms and Conditions
            </Text>{" "}
            &{" "}
            <Text as="span" color="blue.500">
              Privacy Policy
            </Text>
          </Text>
          <Text fontSize="xs" color="gray.500" mt={2}>
            This site is protected by reCAPTCHA and the Google{" "}
            <Text as="span" color="blue.500">
              Privacy Policy
            </Text>{" "}
            and{" "}
            <Text as="span" color="blue.500">
              Terms of Service
            </Text>{" "}
            apply.
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default LoginSignup
