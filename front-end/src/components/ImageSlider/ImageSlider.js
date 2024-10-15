import { Box, HStack, Image, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const images = [
  "https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26109.jpg?tr=w-1920,q=80",
  "https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26112.jpg?tr=w-1920,q=80",
  "https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26108.jpg?tr=w-1920,q=80"
];

const offerLabels = [
  "Offers on Domex",
  "Offers on Dove",
  "Offers on Surf Excel"
];

const ImageSlider = () => {
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSlide = (i) => {
    setCurrIndex(i);
  };

  return (
    <Box width="100%" maxW="1200px" mx="auto" position="relative" overflow="hidden">
      {/* Image display */}
      <Box
        display="flex"
        width="300%"
        transform={`translateX(-${currIndex * 100}%)`}
        transition="transform 0.5s ease-in-out"
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            width="100%"
            objectFit="cover"
            borderRadius="md"
          />
        ))}
      </Box>

      

      <HStack
        position="absolute"
        bottom="5px"
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
