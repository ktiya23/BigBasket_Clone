import React from 'react';
import { Button, Image, Flex, Spacer, useDisclosure } from '@chakra-ui/react';
import CustomModal from './CustomModal'; // Reusable modal component
import logo from '../../assests/images/logo.png'; // Import the logo directly

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex as="header" bg="gray.100" p={4} align="center" justify="space-between" direction={["column", "row"]}>
      <Image src={logo} alt="BigBasket Logo" height="50px" width="150px" />
      <Spacer />
      <Button
        onClick={onOpen}
        size="md"
        mx={2}
        p="10px"
        bgColor="gray.200"
        aria-label="Select Location"
      >
        Select Location
      </Button>

      {/* Reusable Modal */}
      <CustomModal isOpen={isOpen} onClose={onClose} title="Choose Address">
        {/* Address selection content can go here */}
        <p>Address Selection Form</p>
      </CustomModal>
    </Flex>
  );
}

export default Header;
