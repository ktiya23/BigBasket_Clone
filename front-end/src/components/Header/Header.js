// src/components/Header.js
import { Flex, Box, Image, Input, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";
import React from "react";
import LoginModal from "./LoginModal";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="header"
      bg="gray.100"
      p={4}
      align="center"
      justify="space-evenly"
      boxShadow="md"
    >
      {/* Logo */}
      <Box >
        <Image src="https://static.startuptalky.com/2023/07/bigbasket-logo-StartupTalky.jpg" alt="BigBasket Logo" height="50px" width="150px" />
      </Box>

      {/* Search Box */}
      <Box flex="1" mx={4} maxW="600px">
        <Input
          placeholder="Search for products"
          size="md"
          w="100%"
          bg="white"
          borderRadius="md"
          p="10px"
        />
      </Box>

      {/* Location Button */}
      <Button onClick={onOpen} size="md" mx={2} p="10px" bgColor="gray.200" >
        Select Location
      </Button>

      {/* Modal for Selecting Location */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Choose Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Content for choosing address can go here */}
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* SignUp/Login Button */}
      {/* <Button size="md" p="10px" bgColor="black" color="white">
        Login/Sign Up
      </Button> */}
      <LoginModal/>
    </Flex>
  );
}

export default Header;
