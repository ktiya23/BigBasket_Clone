import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Text,
    useDisclosure,
    Box
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  function LoginModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [phoneOrEmail, setPhoneOrEmail] = useState('');
  
    return (
      <Box>
        
        {/* Trigger Button to Open Modal */}
        <Button onClick={onOpen} color="white" bg="black" p="10px" size="md">
          Login/Sign Up
        </Button>
  
        {/* Modal for Login */}
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalCloseButton />
          <ModalOverlay
            bg="blackAlpha.600"
            backdropFilter="blur(1px)" // Background blur effect
          />
          <ModalContent>
            <ModalHeader>Login / Sign Up</ModalHeader>
            <ModalBody>
              <Text mb={2}>Login using Phone Number or Email</Text>
              <Input
                placeholder="Enter phone number or email"
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
                mb={4}
                type="text"
              />
              <Button colorScheme="teal" width="100%">
                Continue
              </Button>
            </ModalBody>
            <ModalFooter>
              <Text fontSize="sm" color="gray.500">
                We'll send you an OTP for verification.
              </Text>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    );
  }
  
  export default LoginModal;
  