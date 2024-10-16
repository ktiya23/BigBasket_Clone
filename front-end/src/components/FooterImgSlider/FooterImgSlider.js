import { Box, HStack, Image, IconButton, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const images = [
  "https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250923_400.jpg?tr=w-1920,q=80",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250923_400.jpg?tr=w-1920,q=80",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg?tr=w-1920,q=80",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250923_400.jpg?tr=w-1920,q=80",
];

const FooterImgSlider = () => {
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSlide = (i) => {
    setCurrIndex(i);
  };

  const handlePrev = () => {
    setCurrIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box position="relative" overflow="hidden">
      <Box
        display="flex"
        width={`${images.length * 100}%`}
        transform={`translateX(-${currIndex * 100}%)`}
        transition="transform 0.5s ease-in-out"
      >
        {images.map((img, i) => (
          <Image
            src={img}
            key={i}
            width="100%"
            objectFit="cover"
            borderRadius="md"
          />
        ))}
      </Box>

      <IconButton
        aria-label="Previous"
        icon={<Text fontSize="2xl">{"<"}</Text>}
        onClick={handlePrev}
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
        bg="transparent"
        _hover={{ bg: "gray.200" }}
      />
      <IconButton
        aria-label="Next"
        icon={<Text fontSize="2xl">{">"}</Text>}
        onClick={handleNext}
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
        bg="transparent"
        _hover={{ bg: "gray.200" }}
      />

      <HStack justify="center" mt={4}>
        {images.map((_, index) => (
          <Box
            key={index}
            width="12px"
            height="12px"
            borderRadius="full"
            bg={currIndex === index ? "green.500" : "gray.300"}
            cursor="pointer"
            mx={1}
            onClick={() => handleSlide(index)}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default FooterImgSlider;
