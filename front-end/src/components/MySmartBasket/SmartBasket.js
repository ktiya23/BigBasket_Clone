import React from "react";
import { Box, Flex, LinkBox, Text } from "@chakra-ui/react";

const images = [
  "https://www.bigbasket.com/media/uploads/p/m/10000025_32-fresho-banana-robusta.jpg?tr=w-154,q-80",
  "https://www.bigbasket.com/media/uploads/p/m/10000333_15-fresho-chilli-green-long-medium.jpg?tr=w-154,q-80",
  "https://www.bigbasket.com/media/uploads/p/m/10000089_20-fresho-coccinia.jpg?tr=w-154,q-80",
  "https://www.bigbasket.com/media/uploads/p/m/10000326_16-fresho-coriander-leaves.jpg?tr=w-154,q-80",
  "https://www.bigbasket.com/media/uploads/p/m/10000327_14-fresho-curry-leaves.jpg?tr=w-154,q-80",
  "https://www.bigbasket.com/media/uploads/p/m/10000142_18-fresho-ladies-finger.jpg?tr=w-154,q-800",
  "https://www.bigbasket.com/media/uploads/p/m/1201414_1-fresho-onion.jpg?tr=w-154,q-80",
  "https://www.bigbasket.com/media/uploads/p/m/40048459_8-fresho-potato-new-crop.jpg?tr=w-154,q-80",
];

const offers = [
  "38% OFF",
  "20% OFF",
  "61% OFF",
  "20% OFF",
  "20% OFF",
  "38% OFF",
  "25% OFF",
  "24% OFF",
];

const productName = [
  "Banana - Robusta",
  "Chilli - Green Long, Medium (Loose)",
  "Coccinia (Loose)",
  "Coriander Leaves",
  "Curry Leaves",
  "Ladies' Fingers (Loose)",
  "Onion",
  "Potato",
];

const price = [
  "₹40",
  "₹99.73",
  "₹61",
  "₹101.93",
  "₹132.6",
  "₹40",
  "₹210",
  "₹118",
];
const SmartBasket = () => {
  return (
    <div>
      <Box bg="gray.100" height="500px" width="auto">
        <Flex>
            <Text>My Smart Basket</Text>
            
        </Flex>
        
        <Box>
          <LinkBox>

          </LinkBox>
        </Box>
      </Box>
    </div>
  );
};

export default SmartBasket;
