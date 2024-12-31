import React from 'react'
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";


const SnackStore = () => {
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
  )
}

export default SnackStore
