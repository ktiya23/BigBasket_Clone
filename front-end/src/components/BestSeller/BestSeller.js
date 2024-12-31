import React ,{useState}from 'react'
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";


const products = [
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/m/1201459_4-bigbasket-baby-wipes-fresh-no-paraben-double-moisturizing.jpg?tr=w-154,q-80",
      offer: "38% OFF",
      label:"BigBasket",
      name: "Bigbasket Baby Wipes",
      price: "₹327",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/m/40202338_5-pampers-baby-wipes-with-aloe.jpg?tr=w-154,q-80",
      offer: "20% OFF",
      label:"Pampers",
      name: "Bigbasket Baby Wipes",
      price: "₹179",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/m/262270_21-johnsons-baby-skin-care-wipes.jpg?tr=w-154,q-80",
      offer: "61% OFF",
      label:"Pampers",
      name: "Skincare Wipes",
      price: "₹212",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/m/1224871_1-littles-baby-wipes-with-aloe-vera-jojoba-oil-vitamin-e.jpg?tr=w-154,q-80",
      offer: "20% OFF",
      label:"Littles",
      name: "Baby Wipes",
      price: "₹297",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/m/40085598_4-bigbasket-baby-wipes-cherry-blossom-no-paraben-double-moisturizing.jpg?tr=w-154,q-800",
      offer: "20% OFF",
      label:"BigBasket",
      name: "Baby Wipes",
      price: "₹198",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/m/1226972_1-littles-baby-diaper-pants-xl-with-wetness-indicator-12-hours-absorption.jpg?tr=w-154,q-80",
      offer: "38% OFF",
      label:"Littles",
      name: "Baby Diaper Pants",
      price: "₹340",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/m/1201458_3-bigbasket-baby-wipes-sea-breeze-no-paraben-double-moisturizing.jpg?tr=w-154,q-80",
      offer: "25% OFF",
      label:"BigBasket",
      name: "Baby Wipes",
      price: "₹210",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/m/40125231_4-bodyguard-premium-baby-wet-wipes-with-aloe-vera-paraben-free.jpg?tr=w-154,q-80",
      offer: "24% OFF",
      label:"Bodyguard",
      name: "Baby Wet Wipes",
      price: "₹118",
    },
  ];
  
const productPerPage = 4;

const BestSeller = () => {
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
          <Text fontSize="larger" fontWeight="bold" paddingTop={6} textAlign="left">
            Best Sellers
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
}

export default BestSeller
