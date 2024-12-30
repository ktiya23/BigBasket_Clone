import React, { useState } from "react";
import { Box, Flex, Image, Button, Text } from "@chakra-ui/react";

const products = [
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/m/10000025_32-fresho-banana-robusta.jpg?tr=w-154,q-80",
    offer: "38% OFF",
    name: "Banana - Robusta",
    price: "₹40",
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/m/10000333_15-fresho-chilli-green-long-medium.jpg?tr=w-154,q-80",
    offer: "20% OFF",
    name: "Chilli - Green Long, Medium (Loose)",
    price: "₹99.73",
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/m/10000089_20-fresho-coccinia.jpg?tr=w-154,q-80",
    offer: "61% OFF",
    name: "Coccinia (Loose)",
    price: "₹61",
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/m/10000326_16-fresho-coriander-leaves.jpg?tr=w-154,q-80",
    offer: "20% OFF",
    name: "Coriander Leaves",
    price: "₹101.93",
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/m/10000327_14-fresho-curry-leaves.jpg?tr=w-154,q-80",
    offer: "20% OFF",
    name: "Curry Leaves",
    price: "₹132.6",
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/m/10000142_18-fresho-ladies-finger.jpg?tr=w-154,q-800",
    offer: "38% OFF",
    name: "Ladies' Fingers (Loose)",
    price: "₹40",
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/m/1201414_1-fresho-onion.jpg?tr=w-154,q-80",
    offer: "25% OFF",
    name: "Onion",
    price: "₹210",
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/m/40048459_8-fresho-potato-new-crop.jpg?tr=w-154,q-80",
    offer: "24% OFF",
    name: "Potato",
    price: "₹118",
  },
];

const SmartBasket = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 4;

  const currentProducts = products.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  const handleNextPage = () => {
    if ((currentPage + 1) * productsPerPage < products.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <Box bg="gray.100" p={4}>
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="xl" fontWeight="bold">
          My Smart Basket
        </Text>
        <Text color="blue.500" cursor="pointer">
          View All
        </Text>
      </Flex>

      <Flex wrap="wrap" gap={4} justify="center">
        {currentProducts.map((product, index) => (
          <Box
            key={index}
            bg="white"
            boxShadow="md"
            borderRadius="md"
            p={4}
            textAlign="center"
            width="200px"
          >
            <Box position="relative">
              <Image src={product.image} alt={product.name} borderRadius="md" />
              <Text
                position="absolute"
                top="5px"
                left="5px"
                bg="red.500"
                color="white"
                px={2}
                fontSize="sm"
                borderRadius="sm"
              >
                {product.offer}
              </Text>
            </Box>
            <Text fontWeight="bold" mt={2}>
              Fresho!
            </Text>
            <Text>{product.name}</Text>
            <Text fontWeight="bold" mt={2}>
              {product.price}
            </Text>
            <Flex justify="space-between" mt={4}>
              <Button size="sm" colorScheme="teal" variant="outline">
                Save for Later
              </Button>
              <Button size="sm" colorScheme="teal">
                Add
              </Button>
            </Flex>
          </Box>
        ))}
      </Flex>

      <Flex justify="center" mt={4} gap={4}>
        <Button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          colorScheme="blue"
        >
          &lt;
        </Button>
        <Button
          onClick={handleNextPage}
          disabled={(currentPage + 1) * productsPerPage >= products.length}
          colorScheme="blue"
        >
          &gt;
        </Button>
      </Flex>
    </Box>
  );
};

export default SmartBasket;
