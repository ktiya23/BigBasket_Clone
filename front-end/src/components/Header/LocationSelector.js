import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Box,
  Button,
  Text,
  CloseButton,
  Flex,
  Input,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import debounce from "lodash.debounce";

const LocationSelector = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationResults, setLocationResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const popupRef = useRef();

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  const fetchLocationData = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.LOCATION_API_KEY}&q=${query}&limit=5`
      );
      const data = await response.json();
      setLocationResults(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching location data:", error);
      setLocationResults([]);
      alert("Failed to fetch locations. Please try again.");
    }
    setLoading(false);
  };

  const debouncedFetch = useCallback(
    debounce((value) => fetchLocationData(value), 300),
    []
  );

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    if (value.trim()) {
      debouncedFetch(value);
    } else {
      setLocationResults([]);
    }
  };

  return (
    <Flex direction="column" align="start">
      <Button colorScheme="gray" onClick={togglePopup}>
        Select Location
      </Button>

      {isPopupOpen && (
        <Box
          ref={popupRef}
          position="fixed"
          top="20%"
          left="50%"
          transform="translate(-50%, -50%)"
          bg="white"
          p={6}
          borderRadius="md"
          boxShadow="lg"
          zIndex="10"
          width={["90%", "400px"]}
        >
          <CloseButton
            position="absolute"
            top="10px"
            right="10px"
            onClick={togglePopup}
            aria-label="Close location selector"
          />

          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Select a location for delivery
          </Text>
          <Text fontSize="sm" color="gray.600" mb={4}>
            Choose your address location to see product availability and delivery
            options.
          </Text>
          <Input
            placeholder="Search for area"
            value={searchQuery}
            onChange={handleSearch}
          />
          {loading && <Spinner size="sm" mt={2} />}
          {!loading && locationResults.length === 0 && searchQuery && (
            <Text fontSize="sm" color="gray.600" mt={2}>
              No locations found for "{searchQuery}"
            </Text>
          )}
          <List mt={4} spacing={2} maxHeight="200px" overflowY="auto">
            {locationResults.map((location, index) => (
              <ListItem
                key={index}
                bg="gray.100"
                p={2}
                borderRadius="md"
                cursor="pointer"
                _hover={{ bg: "gray.200" }}
                onClick={() => {
                  alert(`Selected location: ${location.display_name}`);
                  setIsPopupOpen(false);
                }}
              >
                {location.display_name}
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {isPopupOpen && (
        <Box
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        bg="blackAlpha.300"
        zIndex="5"
        onClick={togglePopup} 
      />
      
      )}
    </Flex>
  );
};

export default LocationSelector;
