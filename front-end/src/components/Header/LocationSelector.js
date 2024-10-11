import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  useDisclosure,
  Stack,
  FormLabel,
} from '@chakra-ui/react';

const LocationSelector = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [address, setAddress] = useState('');

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Address selected:', address);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal">
        Select Location
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Choose Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormLabel>Enter your address:</FormLabel>
              <Input
                value={address}
                onChange={handleAddressChange}
                placeholder="123 Main St, City, State"
              />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LocationSelector;
