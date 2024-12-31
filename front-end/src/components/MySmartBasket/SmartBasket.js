import React, { useState } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

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
    name: "Chilli - Green Long",
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

const productPerPage = 4;

const SmartBasket = () => {
  const [current, setCurrent] = useState(0);

  const currentProducts = products.slice(
    current * productPerPage,
    (current + 1) * productPerPage
  );

  const Next = () => {
    if ((current + 1) * productPerPage < products.length) {
      setCurrent((prev) => prev + 1);
    }
  };

  const Previous = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <Box bg="gray.100" p={2}>
      <Flex justifyContent="space-between" mb={4} alignItems="center">
        <Text fontSize="larger" fontWeight="bold" paddingTop={6}>
          My Smart Basket
        </Text>
        <Flex mt={4} gap={4}>
          <Button  onClick={Previous}  disabled={current === 0}  bg="white" color="black" _hover={{border:"1px solid black"}}  >
            &lt;
          </Button>
          <Button  onClick={Next}  disabled={(current + 1) * productPerPage >= products.length}  bg="white" color="black"   _hover={{border:"1px solid black"}}>
            &gt;
          </Button>
        </Flex>
      </Flex>
      <Flex wrap="wrap" justify="space-evenly">
        {currentProducts.map((product, i) => (
          <Box  key={i}  bg="white"  boxShadow="md"  borderRadius="md"  p={1}  textAlign="left"  width="250px"  minHeight="300px"  display="flex"  flexDirection="column" justifyContent="space-around">
            <Box position="relative">
              <Image src={product.image} alt={product.name} borderRadius="md" mt={6}/>
              <Text  position="absolute"  top="5px"  left="5px"  bg="green.200"  color="white"  px="2"  fontSize="sm"  borderRadius="sm" mt={6}>
                {product.offer}
              </Text>
            </Box><br/>
            <Box mt={4} textAlign="left">
              <Text fontWeight="light" color="gray">
                fresho!
              </Text>
              <Text>{product.name}</Text>
              <br/>
              <Text fontWeight="bold" mt="2">
                {product.price}
              </Text><br/>
            </Box>
            <Button bg="white" border="1px solid red" _hover={{ background: "red", color: "white" }} mt={2} mb={6} margin={2}>
              Add
            </Button>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default SmartBasket;
