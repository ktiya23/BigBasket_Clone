import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const FruitNVeg = () => {
  const posters = [
    {
      image:
        "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_fresh-vegetables_480_250923.jpg?tr=w-480,q-80",
    },
    {
      image:
        "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_fresh-fruits_480_250923.jpg?tr=w-480,q-80",
    },
    {
      image:
        "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_cuts-&-exotics_480_250923.jpg?tr=w-480,q-80",
    },
    {
      image:
        "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_herbs-&-seasoning_480_250923.jpg?tr=w-480,q-80",
    },
  ];

  return (
    <div>
      <Text fontSize="x-large" fontWeight="bold">
        Fruits and Vegetables
      </Text>
      <Flex gap={2}>
        {posters.map((poster, i) => (
            <Link>
            <Image src={poster.image} alt={`Poster ${i}`} _hover={{boxShadow: "0px 4px 8px rgba(96, 96, 96, 0.5)",transition: "0.3s"}} cursor="pointer" borderRadius="8px"  overflow="hidden" height="150px"  />
            </Link>
          
        ))}
      </Flex>
    </div>
  );
};

export default FruitNVeg;
