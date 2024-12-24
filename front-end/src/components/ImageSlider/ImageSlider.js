import { Box, HStack, Image, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const images = [
  "https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26109.jpg?tr=w-1920,q=80",
  "https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26112.jpg?tr=w-1920,q=80",
  "https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26108.jpg?tr=w-1920,q=80",
  "https://www.bigbasket.com/media/uploads/banner_images/IBBN-SB111814265-28019.jpg?tr=w-1600,q-80",
];

const offerLabels = [
  "Offers on Domex",
  "Offers on Dove",
  "Offers on Surf Excel",
  "Offers on Tea Coffee",
];

const ImageSlider = () => {
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSlide = (index) => {
    setCurrIndex(index);
  };

  return (
    <Box
      width="100%"
      maxW="1200px"
      mx="auto"
      position="relative"
      overflow="hidden"
      borderRadius="md"
    >
      {/* Image container */}
      <Box
        display="flex"
        width={`${images.length * 100}%`}
        transform={`translateX(-${currIndex * 100}%)`}
        transition="transform 0.6s ease-in-out"
      >
        {images.map((image, index) => (
          <Box
            key={index}
            flex="0 0 100%"
            height="300px" 
            bg="gray.100"
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width="100%"
              height="100%"
              objectFit="cover"
              borderRadius="md"
            />
          </Box>
        ))}
      </Box>

      <HStack
        position="absolute"
        bottom="20px"
        left="50%"
        transform="translateX(-50%)"
        spacing={4}
        zIndex="1"
      >
        {offerLabels.map((label, index) => (
          <Button
            key={index}
            size="sm"
            colorScheme={currIndex === index ? "green" : "gray"}
            onClick={() => handleSlide(index)}
          >
            {label}
          </Button>
        ))}
      </HStack>
    </Box>
  );
};

export default ImageSlider;
